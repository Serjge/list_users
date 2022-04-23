import { FC } from 'react';

import styles from './UserCard.module.scss';

import { CardItem } from 'components';

type UserCardPropsType = {
  name: string;
  city: string;
  company: string;
  id: number;
};

export const UserCard: FC<UserCardPropsType> = ({ company, city, name, id }) => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <CardItem title="ФИО" text={name} />
      <CardItem title="город" text={city} />
      <CardItem title="компания" text={company} />
    </div>
    <a href={`http://${id}`} className={styles.link}>
      Подробнее
    </a>
  </div>
);
