import React, { ButtonHTMLAttributes, FC } from "react";
import classNames from "classnames";
import styles from "./button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme: "clear";
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;

  return (
    <button className={classNames(styles[theme], className)} {...otherProps}>
      {children}
    </button>
  );
};
