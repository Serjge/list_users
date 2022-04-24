import { FC, useContext, useState } from 'react';

import styles from './UserProfilePage.module.scss';

import { Button, UserProfileForm } from 'components';
import { UsersContext } from 'context';

type UserProfilePagePropsType = {
  userId: number;
  selectListUsersPage: () => void;
};

const ZERO_ELEMENT_ARRAY = 0;

export const UserProfilePage: FC<UserProfilePagePropsType> = ({
  userId,
  selectListUsersPage,
}) => {
  const { users } = useContext(UsersContext);

  const [isDisable, setIsDisable] = useState(true);

  const {
    phone,
    address: { city, street, zipcode },
    email,
    username,
    name,
    website,
  } = users.filter(({ id }) => id === userId)[ZERO_ELEMENT_ARRAY];

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
        selectListUsersPage={selectListUsersPage}
      />
    </div>
  );
};
