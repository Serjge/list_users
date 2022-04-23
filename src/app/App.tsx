import { FC, useCallback, useMemo, useState } from 'react';

import style from './app.module.scss';

import { SortMenu } from 'components';
import { UsersContext } from 'context';
import { useFetchUsers } from 'hooks';
import { ListUsersPage } from 'pages';
import { SortType } from 'types';
import { sortUsers } from 'utils';

export const App: FC = () => {
  const { users } = useFetchUsers();
  const [userId, setUserId] = useState<Number | null>(null);
  const [sortType, setSortType] = useState<SortType | undefined>(undefined);

  const selectUserProfilePage = (id: number): void => {
    setUserId(id);
  };

  const selectListUsersPage = (): void => {
    setUserId(null);
  };

  const changeSort = useCallback(
    (typeSort: SortType): void => {
      setSortType(typeSort);
    },
    [sortType],
  );

  const profile = (
    <div role="presentation" onClick={selectListUsersPage}>
      Profile
    </div>
  );

  users.sort(sortUsers(sortType));

  const value = useMemo(
    () => ({ users, selectUserProfilePage }),
    [users, selectUserProfilePage],
  );

  return (
    <UsersContext.Provider value={value}>
      <div className={style.wrapper}>
        <SortMenu changeSort={changeSort} />
        {userId ? profile : <ListUsersPage />}
      </div>
    </UsersContext.Provider>
  );
};
