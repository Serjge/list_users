import {
  DeepPartial,
  UnpackNestedValue,
  useForm,
  UseFormHandleSubmit,
  UseFormRegisterReturn,
} from 'react-hook-form';

import { TypeField } from 'enums';

export type FormInputType = {
  nameForm: string;
  userNameForm: string;
  emailForm: string;
  cityForm: string;
  streetForm: string;
  zipCodeForm: string;
  phoneForm: string;
  webSiteForm: string;
  commentForm: string;
};

type DataFormType = {
  type: TypeField.textField | TypeField.textArea;
  label: string;
  error: string | undefined;
  formRegister: UseFormRegisterReturn;
};

type UseGetFormDataReturnType = {
  handleSubmit: UseFormHandleSubmit<FormInputType>;
  dataForm: DataFormType[];
};

const PATTERN_WEBSITE =
  /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

const PATTERN_EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

type UseGetFormDataType = {
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

export const useGetFormData = ({
  comment,
  city,
  userName,
  name,
  isDisable,
  phone,
  street,
  zipCode,
  webSite,
  email,
}: UseGetFormDataType): UseGetFormDataReturnType => {
  const defaultValues: UnpackNestedValue<DeepPartial<FormInputType>> = {
    cityForm: city,
    commentForm: comment,
    emailForm: email,
    nameForm: name,
    userNameForm: userName,
    phoneForm: phone,
    streetForm: street,
    webSiteForm: webSite,
    zipCodeForm: zipCode,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputType>({ defaultValues });

  const {
    nameForm,
    cityForm,
    commentForm,
    phoneForm,
    userNameForm,
    emailForm,
    webSiteForm,
    streetForm,
    zipCodeForm,
  } = errors;

  const dataForm: DataFormType[] = [
    {
      error: nameForm?.type,
      formRegister: register('nameForm', {
        required: true,
        maxLength: 80,
        disabled: isDisable,
      }),
      type: TypeField.textField,
      label: 'Name',
    },
    {
      error: userNameForm?.type,
      formRegister: register('userNameForm', {
        required: true,
        maxLength: 100,
        disabled: isDisable,
      }),
      type: TypeField.textField,
      label: 'User name',
    },
    {
      error: emailForm?.type,
      formRegister: register('emailForm', {
        required: true,
        pattern: PATTERN_EMAIL,
        disabled: isDisable,
      }),
      type: TypeField.textField,
      label: 'Email',
    },
    {
      error: streetForm?.type,
      formRegister: register('streetForm', {
        required: true,
        disabled: isDisable,
      }),
      type: TypeField.textField,
      label: 'Street',
    },
    {
      error: cityForm?.type,
      formRegister: register('cityForm', {
        required: true,
        disabled: isDisable,
      }),
      type: TypeField.textField,
      label: 'City',
    },
    {
      error: zipCodeForm?.type,
      formRegister: register('zipCodeForm', {
        required: true,
        disabled: isDisable,
      }),
      type: TypeField.textField,
      label: 'Zip Code',
    },
    {
      error: phoneForm?.type,
      formRegister: register('phoneForm', {
        required: true,
        valueAsNumber: true,
        disabled: isDisable,
      }),
      type: TypeField.textField,
      label: 'Phone',
    },
    {
      error: webSiteForm?.type,
      formRegister: register('webSiteForm', {
        required: true,
        minLength: 8,
        pattern: PATTERN_WEBSITE,
        disabled: isDisable,
      }),
      type: TypeField.textField,
      label: 'WebSite',
    },
    {
      error: commentForm?.type,
      formRegister: register('commentForm', {
        required: false,
        maxLength: 300,
        disabled: isDisable,
      }),
      type: TypeField.textArea,
      label: 'Comment',
    },
  ];

  return { handleSubmit, dataForm };
};
