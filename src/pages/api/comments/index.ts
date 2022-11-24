// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Comment } from 'context/comments/types';
import type { NextApiRequest, NextApiResponse } from 'next';

import data from './data.json';
export interface DataResponse {
  data: {
    comments: Comment[];
  };
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataResponse>,
) {
  const comments = data.comments as Comment[];
  res.status(200).json({ data: { comments } });
}
