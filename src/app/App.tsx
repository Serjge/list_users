import { FC } from 'react';

import style from './app.module.scss';

export const App: FC = () => (
  <div className={style.wrapper}>
    <h1 className={style.title}>Hotel</h1>
  </div>
);
