// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Comment } from 'context/comments/types';
import type { NextApiRequest, NextApiResponse } from 'next';
import dataString from './data.json';

interface Data {
  data: {
    comment: Comment;
    message: string | null;
  };
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const comments = dataString.comments as Comment[];
  const { id } = req.query;
  const comment =
    (comments.find((comment) => comment.id === Number(id)) as Comment) ?? null;

  const message = !comment ? 'comments not found' : null;
  if (!comment) return res.status(404).json({ data: { comment, message } });

  res.status(200).json({ data: { comment, message } });
}
