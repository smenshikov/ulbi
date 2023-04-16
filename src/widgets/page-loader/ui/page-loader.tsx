import React, { FC } from 'react';
import classNames from 'classnames';
import { Loader } from 'shared/ui/loader/loader';
import styles from './page-loader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
  <div className={classNames(styles.pageLoader, className)}>
    <Loader />
  </div>
);
