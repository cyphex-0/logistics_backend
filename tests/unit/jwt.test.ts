import {
  signAccessToken,
  signRefreshToken,
  verifyAccessToken,
  verifyRefreshToken
} from '../../src/shared/utils/jwt.js';

describe('JWT Utilities', () => {
  const mockPayload = { userId: '123', email: 'test@test.com', role: 'CUSTOMER' as any };

  it('signs and verifies access token', () => {
    const token = signAccessToken(mockPayload);
    const decoded = verifyAccessToken(token);
    expect(decoded.userId).toBe('123');
    expect(decoded.email).toBe('test@test.com');
    expect(decoded.role).toBe('CUSTOMER');
  });

  it('signs and verifies refresh token', () => {
    const token = signRefreshToken({ userId: '123' });
    const decoded = verifyRefreshToken(token);
    expect(decoded.userId).toBe('123');
  });

  it('throws error on invalid token', () => {
    expect(() => verifyAccessToken('invalid.token.string')).toThrow();
  });
});
