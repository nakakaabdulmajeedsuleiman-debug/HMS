param(
  [switch]$NoDev
)

if (!(Test-Path .env)) { Copy-Item .env.example .env -Force }

Write-Host "Starting MongoDB via docker-compose..."
docker-compose up -d

Write-Host "Installing npm dependencies..."
npm install

Write-Host "Seeding database..."
node scripts/seed.js

if (-not $NoDev) {
  Write-Host "Starting Remix dev server..."
  npm run dev
} else { Write-Host "Bootstrap finished (dev server not started)." }
