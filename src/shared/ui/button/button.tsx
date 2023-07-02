import React, { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'classnames';
import styles from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: 'clear' | 'clearInverted' | 'outline' | 'background' | 'backgroundInverted';
  square?: boolean;
  size?: 'size_m' | 'size_l' | 'size_xl'
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className, children, theme, square, size = 'size_m', ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={classNames(
        styles.button,
        styles[theme],
        square && styles.square,
        styles[size],
        className,
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};
