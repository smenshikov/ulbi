import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './not-found-page.module.scss';

const NotFoundPage: FC = () => {
  const { t } = useTranslation('notFound');

  return (
    <div className={styles.container}>
      <h1>{t('notFoundTitle')}</h1>
    </div>
  );
};

export default NotFoundPage;
