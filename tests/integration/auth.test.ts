import { authService } from '../../src/modules/auth/auth.service.js';
import { userRepository } from '../../src/modules/user/user.repository.js';
import { AuthenticationError, AuthorizationError } from '../../src/shared/errors/index.js';

describe('Auth Integration Tests', () => {
  const mockUser = {
    email: 'newuser@test.com',
    password: 'password123',
    name: 'New User',
  };

  it('registers a new user and returns tokens', async () => {
    const result = await authService.register(mockUser);
    expect(result).toHaveProperty('accessToken');
    expect(result).toHaveProperty('refreshToken');
    expect(result.user.email).toBe(mockUser.email);
    expect(result.user).not.toHaveProperty('password');
  });

  it('rejects duplicate email registration', async () => {
    await expect(authService.register(mockUser)).rejects.toThrow();
  });

  it('logs in successfully', async () => {
    const result = await authService.login({ email: mockUser.email, password: mockUser.password });
    expect(result).toHaveProperty('accessToken');
  });

  it('rejects invalid password login', async () => {
    await expect(authService.login({ email: mockUser.email, password: 'wrongpassword' })).rejects.toThrow(AuthenticationError);
  });

  it('refreshes token', async () => {
    const { refreshToken } = await authService.login({ email: mockUser.email, password: mockUser.password });
    const result = await authService.refresh(refreshToken);
    expect(result).toHaveProperty('accessToken');
  });

  it('logs out successfully and invalidates refresh token in DB', async () => {
    const { user, accessToken } = await authService.login({ email: mockUser.email, password: mockUser.password });
    await authService.logout(user.id, accessToken);
    
    const dbUser = await userRepository.findByEmail(mockUser.email);
    expect(dbUser?.refreshToken).toBeNull();
  });

  it('rejects deactivated account login', async () => {
    // Soft delete the user
    const dbUser = await userRepository.findByEmail(mockUser.email);
    await userRepository.softDelete(dbUser!.id);

    await expect(authService.login({ email: mockUser.email, password: mockUser.password })).rejects.toThrow(AuthorizationError);
  });
});
