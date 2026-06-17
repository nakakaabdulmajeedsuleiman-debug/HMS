Run with MongoDB (local)

1. Start MongoDB with Docker (recommended):
   docker-compose up -d

2. Copy .env.example to .env and adjust if needed:
   cp .env.example .env

3. Seed the database (requires node):
   node scripts/seed.js

4. Install and run Remix app:
   npm install
   npm run dev

5. Open the app: http://localhost:3000 (or the Remix port shown)

Using MongoDB Compass:
- Connect to mongodb://localhost:27017
- Select or create database 'hms'
- Collections: patients, doctors, appointments, staff, invoices

Notes:
- For production, use a managed MongoDB and secure credentials. Do not commit .env with secrets to git.
