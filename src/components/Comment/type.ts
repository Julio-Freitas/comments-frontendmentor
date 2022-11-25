import { Comment } from 'context/comments/types';

enum TypeAction {
  comment = 'comment',
  reply = 'reply',
}

type HandleClickStore = {
  action: 'plus' | 'minus';
  type: 'comment' | 'reply';
  id: number;
  commentId?: number | null;
};

export type onReply = {
  id: number;
  type: keyof typeof TypeAction;
};

export interface CommentPropsChild extends Omit<Comment, 'replies'> {
  _handleCLick: (type: 'plus' | 'minus') => void;
  reply?: boolean;
  onReply: ({ id, type }: onReply) => void;
  type: keyof typeof TypeAction;
  onSendeply: (text?: string) => void;
  textReply?: string;
  onChangeTextReply: (text?: string) => void;
}
export interface CommentProps extends Comment {
  _handleCLickScore: (props: HandleClickStore) => void;
}

export type CreateReply = {
  id: number;
  type: keyof typeof TypeAction;
  commentId?: number;
};
