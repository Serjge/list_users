import { FC } from 'react';

import styles from './UsersTable.module.scss';

import { UserCard } from 'components';
import { useUserContext } from 'hooks';

export const UsersTable: FC = () => {
  const { users, setUserId } = useUserContext();

  const usersMap = users.map(({ company, username, address, id }) => (
    <UserCard
      name={username}
      company={company.name}
      city={address.city}
      key={id}
      id={id}
      setUserId={setUserId}
    />
  ));

  return (
    <div className={styles.wrapper}>
      {usersMap}
      <div className={styles.text}>Найдено {users.length} пользователей</div>
    </div>
  );
};
