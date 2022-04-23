import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

import styles from './Button.module.scss';

type ButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  typeButton?: 'default' | 'edit';
  isDisable?: boolean;
};

export const Button: FC<ButtonPropsType> = ({
  typeButton,
  isDisable,
  onClick,
  type,
  children,
}) => {
  const styleButton =
    typeButton === 'edit' ? `${styles.button} ${styles.button__edit}` : styles.button;

  return (
    <div>
      <button disabled={isDisable} onClick={onClick} type={type} className={styleButton}>
        {children}
      </button>
    </div>
  );
};
