import classNames from "classnames";
import styles from "./navbar.module.scss";
import { FC } from "react";
import { AppLink } from "shared/ui/app-link/app-link";
import { ThemeSwitcher } from "widgets/theme-switcher";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(styles.navbar, className)}>
      <ThemeSwitcher />
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
