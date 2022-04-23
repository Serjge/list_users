import {
  ChangeEvent,
  DetailedHTMLProps,
  FC,
  forwardRef,
  InputHTMLAttributes,
  RefAttributes,
} from 'react';

import styles from './TextField.module.scss';

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type TextFieldPropsType = DefaultInputPropsType &
  RefAttributes<HTMLInputElement> & {
    onChangeText?: (value: string) => void;
    isError?: boolean;
    labelTitle?: string;
    isDisable?: boolean;
  };

export const TextField: FC<TextFieldPropsType> = forwardRef(
  ({ onChange, onChangeText, isError, labelTitle, isDisable, ...restProps }, ref) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>): void => {
      if (onChange) {
        onChange(e);
      }
      if (onChangeText) {
        onChangeText(e.currentTarget.value);
      }
    };

    const styleInput = isError ? `${styles.input} ${styles.error}` : styles.input;

    return (
      <div className={styles.wrapper}>
        <label className={styles.label} htmlFor={labelTitle}>
          {labelTitle}
        </label>
        <input
          type="text"
          onChange={onChangeCallback}
          disabled={isDisable}
          className={styleInput}
          ref={ref}
          {...restProps}
        />
      </div>
    );
  },
);
