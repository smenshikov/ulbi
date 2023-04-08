import React, { FC } from 'react';
import classNames from 'classnames';
import { Link, LinkProps } from 'react-router-dom';
import styles from './app-link.module.scss';

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: 'primary' | 'secondary';
}

export const AppLink: FC<AppLinkProps> = ({
  className,
  children,
  theme = 'primary',
  ...props
}) => (
  <Link
    {...props}
    className={classNames(styles.appLink, styles[theme], className)}
  >
    {children}
  </Link>
);
