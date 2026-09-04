import { db } from '../lib/db.js';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, category, message } = req.body;
    const ticketId = `tkt_${Date.now()}`;

    const dualWriteResult = await db.writeAction({
      action_type: 'CONTACT_SUBMIT',
      entity_id: ticketId,
      payload: { name, email, category, message }
    });

    return res.status(200).json({
      status: 'received',
      ticket_id: ticketId,
      dual_write: dualWriteResult,
      message: 'Ticket recorded successfully via dual-write engine.'
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}
