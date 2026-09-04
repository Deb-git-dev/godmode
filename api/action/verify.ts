import { db } from '../lib/db.js';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { record_id } = req.body;
    const record = await db.getRecordById(record_id);

    if (!record) {
      return res.status(404).json({ error: 'Record not found in ledger' });
    }

    return res.status(200).json({
      status: 'verified',
      record_id,
      verified_at: new Date().toISOString(),
      receipt_id: `rcpt_${record_id}`,
      in_browser_pdf_supported: true
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}
