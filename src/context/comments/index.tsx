import { DataResponse } from 'pages/api/comments';
import { createContext, useEffect, useState } from 'react';

import { IContext, IProvider, Comment, ChangeScoreAttr } from './types';

export const ContextNotification = createContext<IContext>({} as IContext);

export const ProviderNotification = ({ children }: IProvider) => {
  const [comments, setComments] = useState<Comment[] | []>([]);

  const getComments = async (): Promise<DataResponse | null> => {
    try {
      const response = await fetch('/api/comments');
      const json = (await response.json()) as DataResponse;
      return json;
    } catch (error) {
      return null;
    }
  };
  useEffect(() => {
    getComments().then((comments) =>
      setComments(comments?.data.comments ?? []),
    );
  }, []);

  const addNotification = (note: Comment) => {
    setComments((prev) => [...prev, note]);
  };

  const removeNotification = (note: Comment) => {
    setComments((prev) => prev.filter((item) => item.id !== note.id));
  };

  const plusScore = (value: number) => (value >= 0 ? ++value : value);
  const minusScore = (value: number) => (value > 0 ? --value : 0);

  const onChangeScoreComment = ({
    action,
    id,
  }: Omit<ChangeScoreAttr, 'type'>) => {
    const currentComment = comments.map((comment) => {
      if (comment.id === id) {
        return {
          ...comment,
          score:
            action === 'plus'
              ? plusScore(comment.score)
              : minusScore(comment.score),
        };
      }
      return comment;
    });

    setComments(currentComment);
  };

  const onChangeScoreReply = ({
    action,
    id,
    commentId,
  }: Omit<ChangeScoreAttr, 'type'>) => {
    const { replies, ...comment } = comments.find(
      (comment) => comment.id === commentId,
    ) as Comment;
    const newScoreReplies = replies?.map((replie) => {
      if (replie.id === id) {
        return {
          ...replie,
          score:
            action === 'plus'
              ? plusScore(replie.score)
              : minusScore(replie.score),
        };
      }
      return replie;
    });
    const newComment = { ...comment, replies: newScoreReplies };
    const currentComments = comments.filter(
      (item) => item.id !== newComment.id,
    );
    setComments([...currentComments, newComment]);
  };

  const changeScoreComment = ({
    type,
    action,
    id,
    commentId,
  }: ChangeScoreAttr) => {
    const actions = {
      comment: () => onChangeScoreComment({ action, id }),
      reply: () => onChangeScoreReply({ action, id, commentId }),
    };

    actions[type]();
  };
  return (
    <ContextNotification.Provider
      value={{
        comments,
        addNotification,
        removeNotification,
        changeScoreComment,
      }}
    >
      {children}
    </ContextNotification.Provider>
  );
};
