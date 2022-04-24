import {
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
    isError?: boolean;
    labelTitle?: string;
    isDisable?: boolean;
  };

export const TextField: FC<TextFieldPropsType> = forwardRef(
  ({ isError, labelTitle, isDisable, ...restProps }, ref) => {
    const styleInput = isError ? `${styles.input} ${styles.error}` : styles.input;

    return (
      <div className={styles.wrapper}>
        <label className={styles.label} htmlFor={labelTitle}>
          {labelTitle}
        </label>
        <input
          type="text"
          disabled={isDisable}
          className={styleInput}
          ref={ref}
          {...restProps}
        />
      </div>
    );
  },
);
