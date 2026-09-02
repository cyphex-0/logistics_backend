import { Request, Response, NextFunction } from 'express';
import { verifyAccessToken } from '../shared/utils/jwt.js';
import { AuthenticationError } from '../shared/errors/index.js';
import { redis } from '../shared/utils/cache.js';
import { prisma } from '../shared/prisma/client.js';

export async function authenticate(req: Request, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      throw new AuthenticationError('Missing or invalid token');
    }

    const token = authHeader.split(' ')[1];

    let isBlacklisted = null;
    try {
      isBlacklisted = await redis.get(`bl_${token}`);
    } catch {
      // Ignore redis errors for resilience
    }
    if (isBlacklisted) {
      throw new AuthenticationError('Token invalidated');
    }

    const payload = verifyAccessToken(token);

    // Check user still exists and is active
    const user = await prisma.user.findFirst({
      where: { id: payload.userId, isActive: true }
    });

    if (!user) {
      throw new AuthenticationError('User no longer active or exists');
    }

    req.user = {
      id: user.id,
      email: user.email,
      role: user.role
    };

    next();
  } catch {
    next(new AuthenticationError('Authentication failed'));
  }
}
