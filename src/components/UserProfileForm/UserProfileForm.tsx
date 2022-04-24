import { Dispatch, FC, SetStateAction } from 'react';

import { SubmitHandler } from 'react-hook-form';

import styles from './UserProfileForm.module.scss';

import { Button, TextArea, TextField } from 'components';
import { FormInputType, useGetFormData } from 'hooks';

type UserProfileFormPropsType = {
  setUserId: Dispatch<SetStateAction<number | null>>;
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
  setUserId,
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
    const json = JSON.stringify(data);
    console.log(json);
    setIsDisable(true);
  };

  const onBackClick = (): void => {
    setUserId(null);
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
      <div className={styles.wrapper__form}>{form}</div>
      <div className={styles.wrapper__submit}>
        <Button onClick={onBackClick} type="button">
          Назад
        </Button>
        <Button isDisable={isDisable} typeButton="edit" type="submit">
          Отправить
        </Button>
      </div>
    </form>
  );
};
