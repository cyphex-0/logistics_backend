import Redis from 'ioredis';
import { env } from '../../config/env.js';
import { logger } from './logger.js';

export const redis = new Redis(env.REDIS_URL, {
  maxRetriesPerRequest: 1, // Avoid blocking on outage
  enableOfflineQueue: false
});

redis.on('error', (err) => {
  logger.warn('Redis connection error', { err });
});

export async function getOrSetCache<T>(key: string, ttlSeconds: number, fetchFn: () => Promise<T>): Promise<T> {
  try {
    const cached = await redis.get(key);
    if (cached) return JSON.parse(cached);
  } catch (err) {
    logger.warn('Redis GET failed, falling through to source', { key, err });
  }
  
  const data = await fetchFn();
  
  try {
    await redis.set(key, JSON.stringify(data), 'EX', ttlSeconds);
  } catch (err) {
    logger.warn('Redis SET failed, continuing without cache', { key, err });
  }
  
  return data;
}

export async function invalidateCache(patternOrKey: string): Promise<void> {
  try {
    if (patternOrKey.includes('*')) {
      const keys = await redis.keys(patternOrKey);
      if (keys.length > 0) await redis.del(...keys);
    } else {
      await redis.del(patternOrKey);
    }
  } catch (err) {
    logger.warn('Redis invalidation failed', { patternOrKey, err });
  }
}
