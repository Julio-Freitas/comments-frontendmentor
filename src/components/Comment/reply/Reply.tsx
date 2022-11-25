import Image from 'next/image';
import * as Style from './style';
import { useContextUser } from 'context/user/useContextUser';
import { IReply } from './type';
import { ChangeEvent } from 'react';
export const Reply = ({
  buttonText,
  onChangeText,
  onSendeply,
  text,
}: IReply) => {
  const { currentUser } = useContextUser();

  const onChangeTextarea = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    onChangeText(target.value);
  };
  return (
    <Style.Reply>
      <Image
        src={currentUser.image.png}
        width={35}
        height={35}
        alt="Image user"
      />
      <Style.Textarea value={text} onChange={onChangeTextarea}>
        {text}
      </Style.Textarea>
      <Style.Button type="button" onClick={() => onSendeply(text)}>
        {buttonText}
      </Style.Button>
    </Style.Reply>
  );
};
