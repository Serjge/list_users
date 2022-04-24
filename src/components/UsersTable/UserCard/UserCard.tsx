import { Dispatch, FC, memo, SetStateAction } from 'react';

import styles from './UserCard.module.scss';

import { CardItem } from 'components';

type UserCardPropsType = {
  name: string;
  city: string;
  company: string;
  id: number;
  setUserId: Dispatch<SetStateAction<number | null>>;
};

export const UserCard: FC<UserCardPropsType> = memo(
  ({ company, city, name, id, setUserId }) => {
    const onProfileUserClick = (): void => {
      setUserId(id);
    };

    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <CardItem title="ФИО" text={name} />
          <CardItem title="город" text={city} />
          <CardItem title="компания" text={company} />
        </div>
        <div role="presentation" onClick={onProfileUserClick} className={styles.link}>
          Подробнее
        </div>
      </div>
    );
  },
);
