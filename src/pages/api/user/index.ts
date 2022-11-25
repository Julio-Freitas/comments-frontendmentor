import type { NextApiRequest, NextApiResponse } from 'next';
import data from './data.json';
import { IUser } from './type';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data: IUser }>,
) {
  res.status(200).json({ data });
}
