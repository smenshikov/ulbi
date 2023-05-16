import classNames from 'classnames';
import { AppLink } from 'shared/ui/app-link/app-link';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation('navbar');

  return (
    <div className={classNames(styles.navbar, className)}>
      <div className={styles.links}>
        <AppLink to="/" theme="secondary">
          {t('home')}
        </AppLink>
        <AppLink to="/about" theme="secondary">
          {t('about')}
        </AppLink>
      </div>
    </div>
  );
};
