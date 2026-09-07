import { Prisma } from '@prisma/client';
import { userRepository } from '../user/user.repository.js';
import { googleOAuthService } from './google-oauth.service.js';
import {
  AuthenticationError,
  ConflictError,
  AuthorizationError
} from '../../shared/errors/index.js';
import { hashPassword, comparePassword, hashToken, compareToken } from '../../shared/utils/hash.js';
import { signAccessToken, signRefreshToken, verifyRefreshToken } from '../../shared/utils/jwt.js';
import { ROLES } from '../../shared/constants/roles.js';
import { redis } from '../../shared/utils/cache.js';
import jwt from 'jsonwebtoken';
import { logger } from '../../shared/utils/logger.js';

export class AuthService {
  async register(data: Prisma.UserCreateInput) {
    const existing = await userRepository.findByEmail(data.email);
    if (existing) {
      throw new ConflictError('Email already exists');
    }

    const hashedPassword = await hashPassword(data.password!);
    const user = await userRepository.create({
      ...data,
      password: hashedPassword
    });

    return this.issueTokens(user);
  }

  async login(data: Prisma.UserCreateInput) {
    const user = await userRepository.findByEmail(data.email);
    if (!user || !user.password) {
      throw new AuthenticationError('Invalid credentials');
    }
    if (!user.isActive) {
      throw new AuthorizationError('Account deactivated');
    }

    const isValid = await comparePassword(data.password!, user.password);
    if (!isValid) {
      throw new AuthenticationError('Invalid credentials');
    }

    return this.issueTokens(user);
  }

  async googleAuth(idToken: string) {
    const payload = await googleOAuthService.verifyIdToken(idToken);
    const googleId = payload.sub;
    const email = payload.email!;
    const name = payload.name || 'Google User';

    let user = await userRepository.findByGoogleId(googleId);
    if (user) {
      if (!user.isActive) {
        throw new AuthorizationError('Account deactivated');
      }
      return this.issueTokens(user);
    }

    user = await userRepository.findByEmail(email);
    if (user) {
      if (!user.isActive) {
        throw new AuthorizationError('Account deactivated');
      }
      user = await userRepository.linkGoogleId(user.id, googleId);
      return this.issueTokens(user);
    }

    user = await userRepository.create({
      email,
      name,
      googleId,
      password: null,
      role: ROLES.CUSTOMER
    });

    return this.issueTokens(user);
  }

  async refresh(refreshToken: string) {
    let payload;
    try {
      payload = verifyRefreshToken(refreshToken);
    } catch {
      throw new AuthenticationError('Invalid or expired refresh token');
    }

    const user = await userRepository.findById(payload.userId);
    if (!user || !user.isActive) {
      throw new AuthenticationError('User not found or deactivated');
    }

    if (!user.refreshToken) {
      throw new AuthenticationError('Invalid refresh token');
    }

    const isValid = await compareToken(refreshToken, user.refreshToken);
    if (!isValid) {
      throw new AuthenticationError('Invalid refresh token');
    }

    return this.issueTokens(user);
  }

  async logout(userId: string, accessToken: string) {
    await userRepository.updateRefreshToken(userId, null);

    try {
      const decoded = jwt.decode(accessToken) as { exp?: number };
      if (decoded && decoded.exp) {
        const ttl = decoded.exp - Math.floor(Date.now() / 1000);
        if (ttl > 0) {
          try {
            await redis.set(`bl_${accessToken}`, '1', 'EX', ttl);
          } catch (err) {
            logger.warn('Redis SET failed during logout, token will not be blacklisted in cache', {
              err
            });
          }
        }
      }
    } catch {
      // Ignore token decode errors during logout
    }
  }

  private async issueTokens(user: Prisma.UserGetPayload<{}>) {
    const accessToken = signAccessToken({
      userId: user.id,
      email: user.email,
      role: user.role
    });

    const rawRefreshToken = signRefreshToken({ userId: user.id });
    const refreshTokenHash = await hashToken(rawRefreshToken);

    await userRepository.updateRefreshToken(user.id, refreshTokenHash);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, refreshToken, googleId, ...publicUser } = user;

    return {
      user: publicUser,
      accessToken,
      refreshToken: rawRefreshToken
    };
  }
}

export const authService = new AuthService();
