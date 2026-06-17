const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/hms';

async function seed(){
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();

  console.log('Seeding database:', uri);

  await db.collection('patients').deleteMany({});
  await db.collection('patients').insertMany([
    { firstName: 'Jane', lastName: 'Doe', age: 29, gender: 'Female', contact: '0801000001', ward: 'Female Ward' },
    { firstName: 'John', lastName: 'Doe', age: 45, gender: 'Male', contact: '0801000002', ward: 'Male Ward' }
  ]);

  await db.collection('doctors').deleteMany({});
  await db.collection('doctors').insertMany([
    { firstName: 'Ahmed', lastName: 'Ali', dept: 'Surgery', license: 'D-1234' },
    { firstName: 'Aisha', lastName: 'Usman', dept: 'Pediatrics', license: 'D-5678' }
  ]);

  await db.collection('appointments').deleteMany({});
  await db.collection('appointments').insertMany([
    { patient: 'Jane Doe', doctor: 'Dr. Ahmed Ali', date: '2026-06-18', time: '14:00', department: 'General' }
  ]);

  await db.collection('staff').deleteMany({});
  await db.collection('staff').insertOne({ username: 'admin', firstName: 'Admin', lastName: 'User', role: 'Administrator', password: 'admin123' });

  await db.collection('invoices').deleteMany({});
  await db.collection('invoices').insertOne({ patient: 'Jane Doe', amount: 5200, status: 'Pending', issuedAt: new Date() });

  console.log('Seeding complete');
  await client.close();
}

seed().catch(err=>{ console.error(err); process.exit(1); });
