import { FC, useCallback, useMemo, useState } from 'react';

import style from './app.module.scss';

import { SortMenu } from 'components';
import { UsersContext } from 'context';
import { useFetchUsers, useSortUsers } from 'hooks';
import { ListUsersPage, UserProfilePage } from 'pages';

export const App: FC = () => {
  const { users } = useFetchUsers();
  const [userId, setUserId] = useState<number | null>(null);

  const { sortedUsers, changeSort } = useSortUsers(users);

  const selectUserProfilePage = useCallback((id: number): void => {
    setUserId(id);
  }, []);

  const selectListUsersPage = (): void => {
    setUserId(null);
  };

  const value = useMemo(
    () => ({ users: sortedUsers, selectUserProfilePage }),
    [users, selectUserProfilePage],
  );

  return (
    <UsersContext.Provider value={value}>
      <div className={style.wrapper}>
        <SortMenu changeSort={changeSort} />
        {userId ? (
          <UserProfilePage selectListUsersPage={selectListUsersPage} userId={userId} />
        ) : (
          <ListUsersPage />
        )}
      </div>
    </UsersContext.Provider>
  );
};
