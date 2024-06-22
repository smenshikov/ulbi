import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/counter';

const MainPage: FC = () => {
  const { t } = useTranslation('main');

  return (
    <>
      <h1>{t('mainPage')}</h1>
      <Counter />
    </>
  );
};

export default MainPage;
