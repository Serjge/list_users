import { FC, useContext } from 'react';

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

  const user = users.filter(({ id }) => id === userId)[ZERO_ELEMENT_ARRAY];

  return (
    <div>
      Профиль пользоваетля
      {user.username}
      <Button>Редактироввать</Button>
      <UserProfileForm selectListUsersPage={selectListUsersPage} />
    </div>
  );
};
