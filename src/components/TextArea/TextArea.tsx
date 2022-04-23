import {
  ChangeEvent,
  DetailedHTMLProps,
  FC,
  forwardRef,
  InputHTMLAttributes,
  RefAttributes,
} from 'react';

import styles from './TextArea.module.scss';

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export type TextFieldPropsType = DefaultInputPropsType &
  RefAttributes<HTMLTextAreaElement> & {
    onChangeText?: (value: string) => void;
    isError?: boolean;
    labelTitle?: string;
    isDisable?: boolean;
  };

export const TextArea: FC<TextFieldPropsType> = forwardRef(
  ({ onChange, onChangeText, isError, labelTitle, isDisable }, ref) => {
    const onChangeCallback = (e: ChangeEvent<HTMLTextAreaElement>): void => {
      if (onChange) {
        onChange(e);
      }
      if (onChangeText) {
        onChangeText(e.currentTarget.value);
      }
    };

    const styleInput = isError ? `${styles.textarea} ${styles.error}` : styles.textarea;

    return (
      <div className={styles.wrapper}>
        <label className={styles.label} htmlFor={labelTitle}>
          {labelTitle}
        </label>
        <textarea
          onChange={onChangeCallback}
          disabled={isDisable}
          className={styleInput}
          ref={ref}
        />
      </div>
    );
  },
);
