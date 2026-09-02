import { Role } from '../shared/constants/roles.js';

declare global {
  namespace Express {
    export interface Request {
      user?: {
        id: string;
        email: string;
        role: Role;
      };
      id?: string;
    }
  }
}

export {};
