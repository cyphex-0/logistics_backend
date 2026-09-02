import './tests/env-setup.js';
import { prisma } from './src/shared/prisma/client.ts';
prisma.user.count().then(c => console.log('COUNT', c)).catch(console.error);
