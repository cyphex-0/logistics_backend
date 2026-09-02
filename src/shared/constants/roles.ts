export const ROLES = {
  CUSTOMER: 'CUSTOMER',
  COURIER: 'COURIER',
  ADMIN: 'ADMIN'
} as const;

export type Role = keyof typeof ROLES;
