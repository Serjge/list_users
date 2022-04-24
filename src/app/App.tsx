import { FC, useMemo, useState } from 'react';

import style from './app.module.scss';

import { SortMenu } from 'components';
import { UsersContext } from 'context';
import { useFetchUsers, useSortUsers } from 'hooks';
import { ListUsersPage, UserProfilePage } from 'pages';

export const App: FC = () => {
  const { users } = useFetchUsers();

  const [userId, setUserId] = useState<number | null>(null);

  const { sortedUsers, changeSort } = useSortUsers(users);

  const value = useMemo(() => ({ users: sortedUsers, setUserId }), [users]);

  return (
    <UsersContext.Provider value={value}>
      <div className={style.wrapper}>
        <SortMenu changeSort={changeSort} />
        {userId ? <UserProfilePage userId={userId} /> : <ListUsersPage />}
      </div>
    </UsersContext.Provider>
  );
};
