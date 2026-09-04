export default async function handler(req: any, res: any) {
  if (req.method !== 'POST' && req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { provider = 'supabase_oauth', email } = req.body || {};

  return res.status(200).json({
    status: 'authenticated',
    provider,
    session_token: `sess_${Date.now()}_godmode`,
    user: {
      id: 'usr_unified_godmode_01',
      email: email || 'engineer@godmode.ai',
      role: 'godmode_operator',
      statutory_clearance: true
    }
  });
}
