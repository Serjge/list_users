import { FC, useMemo, useState } from 'react';

import style from './app.module.scss';

import { Loading, SortMenu } from 'components';
import { UsersContext } from 'context';
import { useFetchUsers, useSortUsers } from 'hooks';
import { ListUsersPage, UserProfilePage } from 'pages';

export const App: FC = () => {
  const { users, isLoading, error } = useFetchUsers();
  const { sortedUsers, changeSort } = useSortUsers(users);

  const [userId, setUserId] = useState<number | null>(null);

  const value = useMemo(() => ({ users: sortedUsers, setUserId }), [users]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <UsersContext.Provider value={value}>
      <div className={style.wrapper}>
        <SortMenu changeSort={changeSort} />
        {userId ? <UserProfilePage userId={userId} /> : <ListUsersPage />}
        {error}
      </div>
    </UsersContext.Provider>
  );
};
