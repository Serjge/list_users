import { createContext, Dispatch, SetStateAction } from 'react';

import { UserType } from 'types';

export type UsersContextType = {
  users: UserType[];
  setUserId: Dispatch<SetStateAction<number | null>>;
};

export const UsersContext = createContext<UsersContextType>({
  users: [] as UserType[],
  setUserId: () => {},
});
