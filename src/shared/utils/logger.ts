import winston from 'winston';
import { env } from '../../config/env.js';

const redactSecrets = winston.format((info) => {
  // Never log passwords or tokens explicitly
  if (info.password) info.password = '***';
  if (info.token) info.token = '***';
  if (info.refreshToken) info.refreshToken = '***';
  return info;
});

export const logger = winston.createLogger({
  level: env.NODE_ENV === 'production' ? 'info' : 'debug',
  format: winston.format.combine(
    redactSecrets(),
    winston.format.timestamp(),
    env.NODE_ENV === 'production' ? winston.format.json() : winston.format.prettyPrint()
  ),
  transports: [
    new winston.transports.Console()
  ]
});
