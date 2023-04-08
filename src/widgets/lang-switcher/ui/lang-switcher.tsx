import React, { FC } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button/button';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const handleChange = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames(className)}
      theme="clear"
      onClick={handleChange}
    >
      {t('changeLanguageButton')}
    </Button>
  );
};
