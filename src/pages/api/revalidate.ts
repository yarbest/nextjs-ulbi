import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await res.revalidate(req.query.route?.toString() || '');
  return res.json({ revalidated: true });
}
