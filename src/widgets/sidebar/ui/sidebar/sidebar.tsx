import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { ThemeSwitcher } from 'widgets/theme-switcher';
import { LangSwitcher } from 'widgets/lang-switcher';
import { Button } from 'shared/ui/button/button';
import { AppLink } from 'shared/ui/app-link/app-link';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/route-config/route-config';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import styles from './sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation('navbar');

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
      <Button
        className={styles.collapsedBtn}
        data-testid="sidebar-toggle"
        type="button"
        onClick={handleToggle}
        theme="backgroundInverted"
        square
        size="size_l"
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={styles.items}>
        <AppLink className={styles.item} to={RoutePath.main} theme="secondary">
          <MainIcon className={styles.icon} />
          <span className={styles.link}>
            {t('home')}
          </span>
        </AppLink>
        <AppLink className={styles.item} to={RoutePath.about} theme="secondary">
          <AboutIcon className={styles.icon} />
          <span className={styles.link}>
            {t('about')}
          </span>
        </AppLink>
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={styles.lang} />
      </div>
    </div>
  );
};
