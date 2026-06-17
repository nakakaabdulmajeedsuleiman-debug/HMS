Bootstrap & run (automated)

1. Ensure Docker is installed and running.

2. From the repo root run (one-liner):
   npm run bootstrap

   - This starts MongoDB via docker-compose, installs dependencies, and seeds the DB.
   - To avoid starting the dev server in PowerShell: pwsh scripts\bootstrap.ps1 -NoDev
   - For POSIX shells: bash scripts/bootstrap.sh

3. Start dev server:
   npm run dev

4. Open http://localhost:3000

Using MongoDB Compass:
- Connect to: mongodb://localhost:27017
- Database: hms
- Collections: patients, doctors, appointments, staff, invoices

Security note: keep .env out of version control; use a managed DB for production.
