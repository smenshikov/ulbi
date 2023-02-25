import React, { FC, useState } from "react";
import classNames from "classnames";
import styles from "./sidebar.module.scss";
import { ThemeSwitcher } from "widgets/theme-switcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div
      className={classNames(
        styles.sidebar,
        collapsed && styles.collapsed,
        className
      )}
    >
      <button onClick={handleToggle}>toggles</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
