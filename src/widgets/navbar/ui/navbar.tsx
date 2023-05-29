import classNames from 'classnames';
import { FC } from 'react';
import styles from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => (
  <div className={classNames(styles.navbar, className)}>
    <div className={styles.links}>
      /
    </div>
  </div>
);
