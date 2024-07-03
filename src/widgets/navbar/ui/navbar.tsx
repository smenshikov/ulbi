import classNames from 'classnames';
import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button/button';
import { LoginModal } from 'features/auth-by-username';

import styles from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const handleCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const handleShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <div className={classNames(styles.navbar, className)}>
      <Button theme="clearInverted" className={styles.links} onClick={handleShowModal}>
        {t('login')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={handleCloseModal} />
    </div>
  );
};
