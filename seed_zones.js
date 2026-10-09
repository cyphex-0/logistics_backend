import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const BANGLADESH_LOCATIONS = [
  { name: "Dhaka", districts: ["Dhaka", "Faridpur", "Gazipur", "Gopalganj", "Kishoreganj", "Madaripur", "Manikganj", "Munshiganj", "Narayanganj", "Narsingdi", "Rajbari", "Shariatpur", "Tangail"] },
  { name: "Chattogram", districts: ["Bandarban", "Brahmanbaria", "Chandpur", "Chattogram", "Comilla", "Cox's Bazar", "Feni", "Khagrachari", "Lakshmipur", "Noakhali", "Rangamati"] },
  { name: "Rajshahi", districts: ["Bogura", "Chapainawabganj", "Joypurhat", "Naogaon", "Natore", "Pabna", "Rajshahi", "Sirajganj"] },
  { name: "Khulna", districts: ["Bagerhat", "Chuadanga", "Jashore", "Jhenaidah", "Khulna", "Kushtia", "Magura", "Meherpur", "Narail", "Satkhira"] },
  { name: "Barishal", districts: ["Barguna", "Barishal", "Bhola", "Jhalokati", "Patuakhali", "Pirojpur"] },
  { name: "Sylhet", districts: ["Habiganj", "Moulvibazar", "Sunamganj", "Sylhet"] },
  { name: "Rangpur", districts: ["Dinajpur", "Gaibandha", "Kurigram", "Lalmonirhat", "Nilphamari", "Panchagarh", "Rangpur", "Thakurgaon"] },
  { name: "Mymensingh", districts: ["Jamalpur", "Mymensingh", "Netrokona", "Sherpur"] }
];

async function main() {
  console.log("Seeding Bangladesh 8 Divisions & 64 Districts...");
  for (const div of BANGLADESH_LOCATIONS) {
    // Upsert zone
    const zone = await prisma.deliveryZone.upsert({
      where: { name: div.name },
      update: {
        coverageCities: div.districts,
        isActive: true
      },
      create: {
        name: div.name,
        coverageCities: div.districts,
        isActive: true
      }
    });
    // Check for alternative names like Chittagong if Chattogram
    if (div.name === 'Chattogram') {
       const existing = await prisma.deliveryZone.findUnique({ where: { name: 'Chittagong' } });
       if (existing) {
          await prisma.deliveryZone.update({
             where: { name: 'Chittagong' },
             data: { coverageCities: div.districts }
          });
          console.log(`Updated legacy zone: Chittagong`);
       }
    }
    console.log(`Upserted: ${zone.name}`);
  }
  
  console.log("Finished!");
}

main().catch(console.error).finally(() => prisma.$disconnect());
