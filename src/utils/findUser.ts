import { UserType } from 'types';

const ZERO_ELEMENT_ARRAY = 0;

export const findUser = (users: UserType[], userId: number): UserType =>
  users.filter(({ id }) => id === userId)[ZERO_ELEMENT_ARRAY];
