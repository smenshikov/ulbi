import React, { FC } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button/button';
import { Input } from 'shared/ui/input/input';
import styles from './login-form.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.loginForm, className)}>
      <Input type="text" placeholder={t('addUsername')} />
      <Input type="text" placeholder={t('addPassword')} />
      <Button className={styles.loginBtn}>{t('login')}</Button>
    </div>
  );
};
