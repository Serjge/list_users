import { SortType, UserType } from 'types';

const ASCENDING_SORT = 1;
const DESCENDING_SORT = -1;
const LEAVE_IN_PLACE = 0;

export const sortUsers = (users: UserType[], typeSort: SortType): UserType[] => {
  if (typeSort === 'noSort') {
    return users;
  }

  return users.sort((a: UserType, b: UserType): number => {
    const returnProperty = (user: UserType): string =>
      typeSort === 'company' ? user.company.name : user.address.city;

    if (returnProperty(a) > returnProperty(b)) {
      return ASCENDING_SORT;
    }

    if (returnProperty(a) < returnProperty(b)) {
      return DESCENDING_SORT;
    }

    return LEAVE_IN_PLACE;
  });
};
