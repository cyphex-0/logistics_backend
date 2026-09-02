const { Client } = require('pg');
const url =
  'postgresql://neondb_owner:npg_Oos10RrdjGBi@ep-red-cell-azadcj9s.c-3.ap-southeast-1.aws.neon.tech/neondb?sslmode=require';
const c = new Client({ connectionString: url });
c.connect()
  .then(() =>
    c.query(`
    DROP TYPE IF EXISTS "Role" CASCADE;
    DROP TYPE IF EXISTS "ShipmentStatus" CASCADE;
    DROP TYPE IF EXISTS "PaymentStatus" CASCADE;
    DROP TYPE IF EXISTS "AuditAction" CASCADE;
    DROP TYPE IF EXISTS "Zone" CASCADE;
  `)
  )
  .then(() => {
    console.log('DROPPED TYPES');
    c.end();
  })
  .catch(console.error);
