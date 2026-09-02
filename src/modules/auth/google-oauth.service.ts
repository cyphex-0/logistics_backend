import { OAuth2Client, TokenPayload } from 'google-auth-library';
import { env } from '../../config/env.js';
import { AuthenticationError } from '../../shared/errors/index.js';

export class GoogleOAuthService {
  private client = new OAuth2Client(env.GOOGLE_CLIENT_ID);

  async verifyIdToken(idToken: string): Promise<TokenPayload> {
    try {
      const ticket = await this.client.verifyIdToken({
        idToken,
        audience: env.GOOGLE_CLIENT_ID,
      });
      const payload = ticket.getPayload();
      if (!payload) {
        throw new AuthenticationError('Invalid Google token payload');
      }
      return payload;
    } catch (err) {
      throw new AuthenticationError('Invalid Google token');
    }
  }
}

export const googleOAuthService = new GoogleOAuthService();
