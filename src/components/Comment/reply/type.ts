// import { onReply } from '../type';

export interface IReply {
  text: string;
  buttonText: string;
  onChangeText: (text: string) => void;
  onSendeply: (text?: string) => void;
}
