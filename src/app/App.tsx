import { FC } from 'react';

import style from './app.module.scss';

import { UsersTable } from 'components/UsersTable/UsersTable';
import { useFetchUsers } from 'hooks';

export const App: FC = () => {
  const { users } = useFetchUsers();

  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>User list</h1>
      {users && <UsersTable users={users} />}
    </div>
  );
};
