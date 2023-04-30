import React, { FC } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import styles from './error-page.module.scss';

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage: FC<ErrorPageProps> = ({ className }) => {
  const { t } = useTranslation();

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(styles.errorPage, className)}>
      {t('errorPage')}
      <button onClick={handleReload} type="button">
        {t('refreshPage')}
      </button>
    </div>
  );
};
