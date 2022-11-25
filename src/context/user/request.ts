import { IUser } from 'pages/api/user/type';

type DataUser = {
  data: IUser | null;
};
export const getUser = async (): Promise<DataUser> => {
  try {
    const request = await fetch('/api/user');
    const response = (await request.json()) as DataUser;
    return response;
  } catch (error) {
    return {
      data: null,
    };
  }
};
