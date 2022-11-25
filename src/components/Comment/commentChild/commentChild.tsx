import { CommentPropsChild } from '../type';
import Image from 'next/image';
import * as Style from '../style';
import Reply from '../reply';

export const CommentChild = (props: CommentPropsChild) => (
  <>
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
          <Style.ActionReply
            type="button"
            onClick={() =>
              props.onReply({
                id: props.id,
                type: props.type,
              })
            }
          >
            Reply
          </Style.ActionReply>
        </Style.Header>
        <Style.Description>{props.content}</Style.Description>
      </Style.Content>
    </Style.Container>
    {props?.reply && (
      <Style.Container>
        <Reply
          buttonText="REPLY"
          onChangeText={props.onChangeTextReply}
          onSendeply={props.onSendeply}
          text={props?.textReply || ''}
        />
      </Style.Container>
    )}
  </>
);
