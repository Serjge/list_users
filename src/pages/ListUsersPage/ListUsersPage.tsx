import { FC } from 'react';

import styles from './ListUsersPage.module.scss';

import { UsersTable } from 'components';

export const ListUsersPage: FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.title}>Списко пользователей</div>
    <UsersTable />
  </div>
);
