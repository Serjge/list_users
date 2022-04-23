import { useCallback, useMemo, useState } from 'react';

import { SortType, UserType } from 'types';
import { sortUsers } from 'utils';

type UseSortUsersReturnType = {
  changeSort: (typeSort: SortType) => void;
  sortedUsers: UserType[];
};

export const useSortUsers = (users: UserType[]): UseSortUsersReturnType => {
  const [sortType, setSortType] = useState<SortType | undefined>(undefined);

  const changeSort = useCallback(
    (typeSort: SortType): void => {
      setSortType(typeSort);
    },
    [sortType],
  );

  const sortedUsers = users.sort(sortUsers(sortType));

  return useMemo(
    () => ({
      changeSort,
      sortedUsers,
    }),
    [sortType, users],
  );
};
