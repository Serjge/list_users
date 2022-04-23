import { SortType, UserType } from 'types';

const ONE = 1;
const MINUS_ONE = -1;
const ZERO = 0;

type sortUsersReturnType = ((a: UserType, b: UserType) => number) | undefined;

export const sortUsers = (typeSort: SortType | undefined): sortUsersReturnType => {
  switch (typeSort) {
    case 'company': {
      return (a: UserType, b: UserType): number => {
        if (a.company.name > b.company.name) {
          return ONE;
        }
        if (a.company.name < b.company.name) {
          return MINUS_ONE;
        }
        return ZERO;
      };
    }
    case 'city': {
      return (a: UserType, b: UserType): number => {
        if (a.address.city > b.address.city) {
          return ONE;
        }
        if (a.address.city < b.address.city) {
          return MINUS_ONE;
        }
        return ZERO;
      };
    }
    default:
      return undefined;
  }
};
