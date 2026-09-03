import { prisma } from '../src/shared/prisma/client.js';

async function pruneOldData() {
  const threeYearsAgo = new Date();
  threeYearsAgo.setFullYear(threeYearsAgo.getFullYear() - 3);

  console.log(`Pruning data older than ${threeYearsAgo.toISOString()}...`);

  try {
    const deletedNotifications = await prisma.notification.deleteMany({
      where: {
        createdAt: {
          lt: threeYearsAgo
        }
      }
    });
    console.log(`Deleted ${deletedNotifications.count} old notifications.`);

    const deletedTrackingEvents = await prisma.trackingEvent.deleteMany({
      where: {
        createdAt: {
          lt: threeYearsAgo
        }
      }
    });
    console.log(`Deleted ${deletedTrackingEvents.count} old tracking events.`);

  } catch (error) {
    console.error('Error pruning old data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

pruneOldData();
