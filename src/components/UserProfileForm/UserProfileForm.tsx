import { FC } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';

import styles from './UserProfileForm.module.scss';

import { Button, TextArea, TextField } from 'components';

const PATTERN_WEBSITE =
  /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

const PATTERN_EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

type FormInputType = {
  name: string;
  userName: string;
  email: string;
  city: string;
  street: string;
  zipCode: string;
  phone: string;
  webSite: string;
  comment: string;
};

type UserProfileFormPropsType = {
  selectListUsersPage: () => void;
};

export const UserProfileForm: FC<UserProfileFormPropsType> = ({
  selectListUsersPage,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputType>();

  const { name, city, comment, phone, userName, email, webSite, street, zipCode } =
    errors;

  const onSubmit: SubmitHandler<FormInputType> = (data): void => {
    const json = JSON.stringify(data);
    console.log(json);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        type="text"
        labelTitle="Name"
        isError={name?.type !== undefined}
        {...register('name', { required: true, maxLength: 80 })}
      />
      <TextField
        type="text"
        labelTitle="User name"
        isError={userName?.type !== undefined}
        {...register('userName', { required: true, maxLength: 100 })}
      />
      <TextField
        type="text"
        labelTitle="Email"
        isError={email?.type !== undefined}
        {...register('email', {
          required: true,
          pattern: PATTERN_EMAIL,
        })}
      />
      <TextField
        type="text"
        labelTitle="Street"
        isError={street?.type !== undefined}
        {...register('street', { required: true })}
      />
      <TextField
        type="text"
        labelTitle="City"
        isError={city?.type !== undefined}
        {...register('city', { required: true })}
      />
      <TextField
        type="text"
        labelTitle="Zip Code"
        isError={zipCode?.type !== undefined}
        {...register('zipCode', { required: true })}
      />
      <TextField
        type="tel"
        labelTitle="Phone"
        isError={phone?.type !== undefined}
        {...register('phone', { required: true, maxLength: 12 })}
      />
      <TextField
        type="text"
        labelTitle="WebSite"
        isError={webSite?.type !== undefined}
        {...register('webSite', {
          required: true,
          minLength: 8,
          pattern: PATTERN_WEBSITE,
        })}
      />
      <TextArea
        isError={comment?.type !== undefined}
        {...register('comment', { required: true, maxLength: 300 })}
      />
      <div className={styles.wrapper__submit}>
        <Button onClick={selectListUsersPage} type="button">
          Назад
        </Button>
        <Button typeButton="edit" type="submit">
          Отправить
        </Button>
      </div>
    </form>
  );
};
