import { db } from '../lib/db';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { action_type = 'CONVERSION_DISPATCH', target_skill, parameters = {} } = req.body;

    const result = await db.writeAction({
      action_type,
      entity_id: target_skill || 'skill-router',
      payload: parameters
    });

    return res.status(200).json({
      status: 'pending_verification',
      record_id: result.id,
      dual_write: result
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}
