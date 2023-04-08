import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { ThemeSwitcher } from 'widgets/theme-switcher';
import { LangSwitcher } from 'widgets/lang-switcher';
import styles from './sidebar.module.scss';

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
        className,
      )}
    >
      <button type="button" onClick={handleToggle}>toggles</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={styles.lang} />
      </div>
    </div>
  );
};
