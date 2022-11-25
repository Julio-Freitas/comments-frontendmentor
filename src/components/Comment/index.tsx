import { useState } from 'react';
import CommentChild from './commentChild';

import { CommentProps, CreateReply } from './type';

import * as Style from './style';

const Comment = ({
  replies,
  _handleCLickScore,
  ...propsFather
}: CommentProps) => {
  const [currentReply, setCurrentReply] = useState<CreateReply>();
  const [replyValue, setReplyValue] = useState({
    comment: '',
    reply: '',
    id: 0,
  });

  const handleReply = (value?: string, type?: 'comment' | 'reply') => {
    setReplyValue({
      id: propsFather.id,
      reply: type === 'reply' && value ? value : '',
      comment: type === 'comment' && value ? value : '',
    });
  };

  return (
    <Style.WrapperComment>
      <CommentChild
        type="comment"
        {...propsFather}
        _handleCLick={(action) =>
          _handleCLickScore({ action, type: 'comment', id: propsFather.id })
        }
        reply={
          currentReply?.type === 'comment' && currentReply.id === propsFather.id
        }
        onReply={(value) => {
          setCurrentReply({
            id: value.id,
            type: value.type,
          });
        }}
        onSendeply={() => {
          console.log(currentReply);
        }}
        textReply={replyValue.comment}
        onChangeTextReply={(value) => handleReply(value, 'comment')}
      />

      <Style.ContainerReplys data-testid="reply">
        {replies?.map((replie) => (
          <CommentChild
            type="reply"
            key={`child-${replie.id}-${propsFather.id}`}
            {...replie}
            _handleCLick={(action) =>
              _handleCLickScore({
                action,
                type: 'reply',
                id: replie.id,
                commentId: propsFather.id,
              })
            }
            reply={
              currentReply?.type === 'reply' && replie.id === currentReply.id
            }
            onReply={(value) => {
              setCurrentReply({
                id: value.id,
                type: value.type,
              });
            }}
            onSendeply={() => {
              console.log(currentReply);
            }}
            textReply={replyValue.reply}
            onChangeTextReply={(value) => handleReply(value, 'reply')}
          />
        ))}
      </Style.ContainerReplys>
    </Style.WrapperComment>
  );
};

export default Comment;
