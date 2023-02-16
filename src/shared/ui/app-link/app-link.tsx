import React, { FC } from "react";
import classNames from "classnames";
import styles from "./app-link.module.scss";
import { Link, LinkProps } from "react-router-dom";

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: "primary" | "secondary";
}

export const AppLink: FC<AppLinkProps> = ({
  className,
  children,
  theme = "primary",
  ...props
}) => {
  return (
    <Link
      {...props}
      className={classNames(styles.appLink, styles[theme], className)}
    >
      {children}
    </Link>
  );
};
