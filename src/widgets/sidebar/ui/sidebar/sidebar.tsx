import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { ThemeSwitcher } from 'widgets/theme-switcher';
import { LangSwitcher } from 'widgets/lang-switcher';
import { useTranslation } from 'react-i18next';
import styles from './sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const handleToggle = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(
        styles.sidebar,
        collapsed && styles.collapsed,
        className,
      )}
    >
      <button data-testid="sidebar-toggle" type="button" onClick={handleToggle}>
        {t('sidebarButton')}
      </button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={styles.lang} />
      </div>
    </div>
  );
};
