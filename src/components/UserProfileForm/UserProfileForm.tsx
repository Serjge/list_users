import { Dispatch, FC, SetStateAction } from 'react';

import { SubmitHandler } from 'react-hook-form';

import styles from './UserProfileForm.module.scss';

import { Button, TextArea, TextField } from 'components';
import { FormInputType, useGetFormData } from 'hooks';

type UserProfileFormPropsType = {
  selectListUsersPage: () => void;
  setIsDisable: Dispatch<SetStateAction<boolean>>;
  name: string;
  userName: string;
  email: string;
  city: string;
  street: string;
  zipCode: string;
  phone: string;
  webSite: string;
  comment: string;
  isDisable: boolean;
};

export const UserProfileForm: FC<UserProfileFormPropsType> = ({
  selectListUsersPage,
  setIsDisable,
  email,
  comment,
  phone,
  userName,
  name,
  street,
  zipCode,
  webSite,
  city,
  isDisable,
}) => {
  const { handleSubmit, dataForm } = useGetFormData(
    name,
    userName,
    email,
    city,
    street,
    zipCode,
    phone,
    webSite,
    comment,
    isDisable,
  );

  const onSubmit: SubmitHandler<FormInputType> = (data): void => {
    // const json = JSON.stringify(data);
    console.log(data);
    setIsDisable(true);
  };

  const form = dataForm.map(({ type, formRegister, label, error }) => {
    if (type === 'textField') {
      return (
        <TextField
          key={label}
          labelTitle={label}
          isError={error !== undefined}
          {...formRegister}
        />
      );
    }
    return (
      <TextArea
        key={label}
        labelTitle={label}
        isError={error !== undefined}
        {...formRegister}
      />
    );
  });

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {form}
      <div className={styles.wrapper__submit}>
        <Button onClick={selectListUsersPage} type="button">
          Назад
        </Button>
        <Button isDisable={isDisable} typeButton="edit" type="submit">
          Отправить
        </Button>
      </div>
    </form>
  );
};
