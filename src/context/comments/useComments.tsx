import { useContext } from 'react';
import { ContextNotification } from '.';

export function useComments() {
  return useContext(ContextNotification);
}
