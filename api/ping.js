export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://probizusachev-wq.github.io');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(204).end();
  return res.status(200).json({ ok: true, message: 'API CONNECTION · OK', service: 'HR ARCHITECT RESERVE TEST', timestamp: new Date().toISOString() });
}
