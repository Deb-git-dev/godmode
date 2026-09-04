import { db } from '../lib/db';

export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const ledger = await db.getLedger();
    return res.status(200).json({
      total_records: ledger.length,
      audit_timestamp: new Date().toISOString(),
      records: ledger
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}
