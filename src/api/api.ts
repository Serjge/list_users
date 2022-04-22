import { instance } from 'api';
import { PathApi } from 'enums';
import { UserType } from 'types';

export const API = {
  getUsers: () => instance.get<UserType[]>(PathApi.Users),
};
