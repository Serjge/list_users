import { FC } from 'react';

import styles from './CardItem.module.scss';

type CardItemPropsType = {
  title: string;
  text: string;
};

export const CardItem: FC<CardItemPropsType> = ({ text, title }) => (
  <div className={styles.wrapper}>
    <div className={styles.title}>{title}: </div>
    <div className={styles.text}>{text}</div>
  </div>
);
