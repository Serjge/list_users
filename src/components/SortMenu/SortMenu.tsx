import { FC } from 'react';

import styles from './SortMenu.module.scss';

import { Button } from 'components';

export const SortMenu: FC = () => {
  const citySort = (): void => {};
  const companySort = (): void => {};
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Сортировка</div>
      <Button onClick={citySort}> по городу</Button>
      <Button onClick={companySort}>по компании</Button>
    </div>
  );
};
