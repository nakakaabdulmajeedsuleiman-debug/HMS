// Simple POST API endpoint to add a patient (server-side)
import { json } from '@remix-run/node';
import { connectDB } from '../../utils/db.server';

export const action = async ({ request }) => {
  const form = await request.json();
  const db = await connectDB();
  const res = await db.collection('patients').insertOne(form);
  return json({ insertedId: res.insertedId });
};
