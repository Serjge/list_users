import { useContext } from 'react';

import { UsersContext, UsersContextType } from 'context';

export const useUserContext = (): UsersContextType => useContext(UsersContext);
