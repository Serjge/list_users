import { useEffect, useMemo, useState } from 'react';

import { AxiosError } from 'axios';

import { API } from 'api/api';
import { UserType } from 'types';

type UseFetchUsersReturnType = {
  users: UserType[] | undefined;
  error: string | null;
  isLoading: boolean;
};

export const useFetchUsers = (): UseFetchUsersReturnType => {
  const [users, setUsers] = useState<UserType[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async (): Promise<void> => {
    setIsLoading(true);

    try {
      const { data } = await API.getUsers();
      setUsers(data);
    } catch (err) {
      const { message, response } = err as AxiosError;
      const responseMessage = response?.data.message;
      const status = response?.status;

      if (!status) {
        setError(message);
      }
      setError(responseMessage);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return useMemo(
    () => ({
      users,
      isLoading,
      error,
    }),
    [users],
  );
};
