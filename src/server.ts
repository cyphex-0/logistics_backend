import { app } from './app.js';
import { env } from './config/env.js';
import { logger } from './shared/utils/logger.js';
import { prisma, pool } from './shared/prisma/client.js';
import { redis } from './shared/utils/cache.js';

const PORT = env.PORT;

const server = app.listen(PORT, () => {
  logger.info(`Server listening on port ${PORT} in ${env.NODE_ENV} mode`);
});

const shutdown = async (signal: string) => {
  logger.info(`Received ${signal}, shutting down gracefully...`);
  server.close(async () => {
    logger.info('HTTP server closed');
    try {
      await prisma.$disconnect();
      await pool.end();
      logger.info('Prisma disconnected');
      await redis.quit();
      logger.info('Redis disconnected');
      process.exit(0);
    } catch (err) {
      logger.error('Error during shutdown', { err });
      process.exit(1);
    }
  });

  setTimeout(() => {
    logger.error('Could not close connections in time, forcefully shutting down');
    process.exit(1);
  }, 10000);
};

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
