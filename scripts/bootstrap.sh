#!/usr/bin/env bash
set -e
if [ ! -f .env ]; then
  cp .env.example .env
  echo "Created .env from .env.example"
fi

echo "Starting MongoDB via docker-compose..."
docker-compose up -d

echo "Installing npm dependencies..."
npm install

echo "Seeding database..."
node scripts/seed.js

echo "Bootstrap finished. Run 'npm run dev' to start the dev server."
