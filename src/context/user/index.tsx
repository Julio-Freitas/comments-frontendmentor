import { getUser } from './request';
import { IUser } from 'pages/api/user/type';
import { createContext, useEffect, useState } from 'react';

interface ProviderUser {
  children: React.ReactNode;
}
export const ContextUser = createContext<IUser>({} as IUser);

export const ProviderUser = ({ children }: ProviderUser) => {
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    getUser().then(({ data }) => setUser(data));
  }, []);
  return (
    <ContextUser.Provider value={{ ...user } as IUser}>
      {children}
    </ContextUser.Provider>
  );
};
