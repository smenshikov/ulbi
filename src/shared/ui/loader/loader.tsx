import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './loader.module.scss';

interface LoaderProps {
    className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => (
  <div className={classNames(styles.ldsRoller, className)}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);
