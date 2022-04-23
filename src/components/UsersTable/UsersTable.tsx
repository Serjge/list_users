import { FC, useContext } from 'react';

import styles from './UsersTable.module.scss';

import { UserCard } from 'components';
import { UsersContext } from 'context';

export const UsersTable: FC = () => {
  const { users, selectUserProfilePage } = useContext(UsersContext);

  const usersMap = users.map(({ company, username, address, id }) => (
    <UserCard
      name={username}
      company={company.name}
      city={address.city}
      key={id}
      id={id}
      selectUserProfilePage={selectUserProfilePage}
    />
  ));

  return (
    <div className={styles.wrapper}>
      {usersMap}
      <div className={styles.text}>Найдено {users.length} пользователей</div>
    </div>
  );
};
