import { createContext } from 'react';

import { UserType } from 'types';

type UsersContextType = {
  users: UserType[];
  selectUserProfilePage: (id: number) => void;
};

const selectUserProfilePage = (): void => {};

export const UsersContext = createContext<UsersContextType>({
  users: [] as UserType[],
  selectUserProfilePage,
});
