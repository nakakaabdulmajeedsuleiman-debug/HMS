# Hospital Management System - Local Setup Guide

## Prerequisites Setup

### 1. Install Node.js (Required)

**Option A: Download & Install**
- Go to https://nodejs.org/
- Download LTS version (18.x or 20.x)
- Run installer and follow prompts
- Restart PowerShell/Command Prompt after installation

**Verify Installation:**
```bash
node --version
npm --version
```

### 2. Install MongoDB Locally (Required)

**Option A: MongoDB Community Server**
- Download from https://www.mongodb.com/try/download/community
- Run installer for Windows
- Choose "Install MongoDB as a Service"
- MongoDB will run on `mongodb://localhost:27017`

**Option B: MongoDB Portable (No Installation)**
- Download portable version from MongoDB
- Extract to a folder (e.g., C:\mongodb)
- Create data folder: `C:\mongodb\data`
- Run: `.\ mongod.exe --dbpath C:\mongodb\data`

**Verify MongoDB is Running:**
```bash
mongosh  # connects to local MongoDB
```

---

## Setup & Run Steps

### Step 1: Install Dependencies
```bash
cd C:\Users\Hi\Desktop\hospital
npm install
```

### Step 2: Seed Database
```bash
npm run seed
```
This creates sample data in MongoDB

### Step 3: Build Application
```bash
npm run build
```

### Step 4: Run Development Server
```bash
npm run dev
```

The server will start at http://localhost:3000

---

## Available Routes

- Dashboard: http://localhost:3000/dashboard
- Patients: http://localhost:3000/patients
- Doctors: http://localhost:3000/doctors
- Appointments: http://localhost:3000/appointments
- Staff: http://localhost:3000/staff
- Services: http://localhost:3000/services
- Billing: http://localhost:3000/billing
- Reports: http://localhost:3000/reports
- Settings: http://localhost:3000/settings
- Admin: http://localhost:3000/admin

---

## Development Commands

```bash
npm run dev          # Start dev server with hot reload
npm run build        # Build for production
npm start            # Run production build
npm run typecheck    # Check TypeScript errors
npm run seed         # Seed database with sample data
```

---

## Troubleshooting

**MongoDB won't connect:**
- Ensure MongoDB service is running
- Check MONGODB_URI in .env file
- Try connecting with `mongosh`

**npm install fails:**
- Clear npm cache: `npm cache clean --force`
- Delete node_modules: `rmdir /s node_modules` (Windows)
- Try again: `npm install`

**Port 3000 already in use:**
- Change port or kill process using port 3000

**TypeScript errors:**
- Run: `npm run typecheck`
- Fix any reported errors

---

**First Time Setup:**
1. Install Node.js from https://nodejs.org/
2. Install MongoDB from https://www.mongodb.com/try/download/community
3. Run: `npm install`
4. Run: `npm run seed`
5. Run: `npm run dev`
6. Open browser to http://localhost:3000