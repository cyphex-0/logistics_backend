import { Request, Response, NextFunction } from 'express';
import { Role } from '../shared/constants/roles.js';
import { AuthorizationError } from '../shared/errors/index.js';

export function authorize(...allowedRoles: Role[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return next(new AuthorizationError('Insufficient permissions'));
    }
    next();
  };
}
