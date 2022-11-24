import { Comment } from 'context/comments/types';

import Image from 'next/image';
import { useState } from 'react';
import * as Style from './style';

type HandleClickStore = {
  action: 'plus' | 'minus';
  type: 'comment' | 'reply';
  id: number;
  commentId?: number | null;
};
interface CommentPropsChild extends Omit<Comment, 'replies'> {
  _handleCLick: (type: 'plus' | 'minus') => void;
}
interface CommentProps extends Comment {
  _handleCLickScore: (props: HandleClickStore) => void;
}


const Comment = ({
  replies,
  _handleCLickScore,
  ...propsFather
}: CommentProps) => {
  const [reply, setReply] = useState(false)
  const CommentChild = (props: CommentPropsChild) => (
    <Style.Container>
      <Style.Score>
        <Style.IconButton
          type="button"
          onClick={() => props._handleCLick('plus')}
          data-testid="plus"
        >
          <Image
            src="/images/icon-plus.svg"
            alt="Image user"
            width={10}
            height={10}
          />
        </Style.IconButton>
        <Style.ScoreValue data-testid="score">{props.score}</Style.ScoreValue>
        <Style.IconButton
          type="button"
          onClick={() => props._handleCLick('minus')}
        >
          <Image
            src="/images/icon-minus.svg"
            alt="Image user"
            width={10}
            height={4}
          />
        </Style.IconButton>
      </Style.Score>
      <Style.Content>
        <Style.Header>
          <Style.Info>
            <Image
              src={props.user?.image.webp}
              alt="Image user"
              width={35}
              height={35}
            />
            <p>{props.user.username}</p>
            <span className="createdAt">{props.createdAt}</span>
          </Style.Info>
          <Style.ActionReply type="button" onClick={()=> setReply(true)}>Reply</Style.ActionReply>
        </Style.Header>
        <Style.Description>{props.content}</Style.Description>
      </Style.Content>

    </Style.Container>
  );

  return (
    <Style.WrapperComment>

      <CommentChild
        {...propsFather}
        _handleCLick={(action) =>
          _handleCLickScore({ action, type: 'comment', id: propsFather.id })
        }
      />
            {reply &&  <textarea></textarea>}
      <Style.ContainerReplys data-testid="reply">
        {replies?.map((replie) => (
          <CommentChild
            key={'child'}
            {...replie}
            _handleCLick={(action) =>
              _handleCLickScore({
                action,
                type: 'reply',
                id: replie.id,
                commentId: propsFather.id,
              })
            }
          />
        ))}
      </Style.ContainerReplys>

    </Style.WrapperComment>
  );
};

export default Comment;
