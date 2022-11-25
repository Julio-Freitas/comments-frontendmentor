import { ContextUser } from './index';
import { useContext } from 'react';

export function useContextUser() {
  return useContext(ContextUser);
}
