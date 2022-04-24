import { FC, useState } from 'react';

import styles from './UserProfilePage.module.scss';

import { Button, UserProfileForm } from 'components';
import { useUserContext } from 'hooks';
import { findUser } from 'utils';

type UserProfilePagePropsType = {
  userId: number;
};

export const UserProfilePage: FC<UserProfilePagePropsType> = ({ userId }) => {
  const { users, setUserId } = useUserContext();

  const [isDisable, setIsDisable] = useState(true);

  const {
    phone,
    address: { city, street, zipcode },
    email,
    username,
    name,
    website,
  } = findUser(users, userId);

  const onEditProfileClick = (): void => {
    setIsDisable(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>Профиль пользоваетля</div>
        <Button onClick={onEditProfileClick}>Редактироввать</Button>
      </div>
      <UserProfileForm
        setIsDisable={setIsDisable}
        city={city}
        name={name}
        userName={username}
        email={email}
        phone={phone}
        street={street}
        webSite={website}
        zipCode={zipcode}
        comment=""
        isDisable={isDisable}
        setUserId={setUserId}
      />
    </div>
  );
};
