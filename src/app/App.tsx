import { FC } from 'react';

import style from './app.module.scss';

import { Button, TextField } from 'components';

export const App: FC = () => (
  <div className={style.wrapper}>
    <h1 className={style.title}>User list</h1>
    <Button onClick={() => {}}>Редактировать</Button>
    <TextField labelTitle="Website" isError />
  </div>
);
