export type User = {
  image: {
    png: string;
    webp: string;
  };
  username: string;
};

export type Comment = {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies?: Comment[];
};

type ActionScore = 'plus' | 'minus';
export type ActionType = 'comment' | 'reply';

export type ChangeScoreAttr = {
  action: ActionScore;
  type: ActionType;
  id: number;
  commentId?: number | null | undefined;
};

export interface IContext {
  comments: Comment[];
  addNotification?: (value: Comment) => void;
  removeNotification?: (value: Comment) => void;
  changeScoreComment?: ({ type, action, id }: ChangeScoreAttr) => void;
}

export interface IProvider {
  children: React.ReactNode;
}
