import { prisma } from './src/shared/prisma/client.js';

async function main() {
  const zones = await prisma.deliveryZone.findMany();
  console.log(zones.map(z => ({ name: z.name, citiesCount: z.coverageCities.length, cities: z.coverageCities })));
  process.exit(0);
}
main();
