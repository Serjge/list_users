import { FC, useMemo, useState } from 'react';

import style from './app.module.scss';

import { SortMenu } from 'components';
import { UsersContext } from 'context';
import { useFetchUsers } from 'hooks';
import { ListUsersPage } from 'pages';

export const App: FC = () => {
  const { users } = useFetchUsers();
  const [userId, setUserId] = useState<Number | null>(null);

  const selectUserProfilePage = (id: number): void => {
    setUserId(id);
  };

  const selectListUsersPage = (): void => {
    setUserId(null);
  };

  const profile = (
    <div role="presentation" onClick={selectListUsersPage}>
      Profile
    </div>
  );

  const value = useMemo(
    () => ({ users, selectUserProfilePage }),
    [users, selectUserProfilePage],
  );

  return (
    <UsersContext.Provider value={value}>
      <div className={style.wrapper}>
        <SortMenu />
        {userId ? profile : <ListUsersPage />}
      </div>
    </UsersContext.Provider>
  );
};
