import { MongoClient, Db } from "mongodb";

let client: MongoClient | null = null;
let db: Db | null = null;

export async function connectDB(): Promise<Db> {
  if (db) return db;
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI environment variable is not set");

  client = new MongoClient(uri, {});
  await client.connect();
  // If a database name is provided in the URI path, client.db() uses it; otherwise default to 'hms'
  db = client.db();
  return db;
}

export async function closeDB(): Promise<void> {
  if (client) await client.close();
  client = null;
  db = null;
}
