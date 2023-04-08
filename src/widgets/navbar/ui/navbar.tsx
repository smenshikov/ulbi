import classNames from 'classnames';
import { AppLink } from 'shared/ui/app-link/app-link';
import { FC } from 'react';
import styles from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => (
  <div className={classNames(styles.navbar, className)}>
    <div className={styles.links}>
      <AppLink to="/" theme="secondary">
        Home
      </AppLink>
      <AppLink to="/about" theme="secondary">
        About
      </AppLink>
    </div>
  </div>
);
