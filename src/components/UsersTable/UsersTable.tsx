import { FC } from 'react';

import styles from './UsersTable.module.scss';

import { UserCard } from 'components';
import { UserType } from 'types';

type UsersTablePropsType = {
  users: UserType[];
};

export const UsersTable: FC<UsersTablePropsType> = ({ users }) => {
  const usersMap = users.map(({ company, username, address, id }) => (
    <UserCard
      name={username}
      company={company.name}
      city={address.city}
      key={id}
      id={id}
    />
  ));

  return (
    <div className={styles.wrapper}>
      {usersMap}
      <div className={styles.text}>Найдено {users.length} пользователей</div>
    </div>
  );
};
