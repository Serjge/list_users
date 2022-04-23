import { FC, memo } from 'react';

import styles from './SortMenu.module.scss';

import { Button } from 'components';
import { SortType } from 'types';

type SortMenuPropsType = {
  changeSort: (typeSort: SortType) => void;
};

export const SortMenu: FC<SortMenuPropsType> = memo(({ changeSort }) => {
  const onSortCityClick = (): void => {
    changeSort('city');
  };

  const onSortCompanyClick = (): void => {
    changeSort('company');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Сортировка</div>
      <Button onClick={onSortCityClick}> по городу</Button>
      <Button onClick={onSortCompanyClick}>по компании</Button>
    </div>
  );
});
