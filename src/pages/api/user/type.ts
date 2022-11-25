type ImageUser = {
  png: string;
  webp: string;
};

export interface IUser {
  currentUser: {
    image: ImageUser;
    username: string;
  };
}
