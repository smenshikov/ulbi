import classNames from "classnames";
import styles from "./navbar.module.scss";
import { FC } from "react";
import { AppLink } from "shared/ui/app-link/app-link";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
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
};
