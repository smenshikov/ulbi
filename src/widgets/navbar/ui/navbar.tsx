import classNames from 'classnames';
import { FC, useCallback, useState } from 'react';
import { Modal } from 'shared/ui/modal/modal';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button/button';
import styles from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const handleToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(styles.navbar, className)}>
      <Button theme="clearInverted" className={styles.links} onClick={handleToggleModal}>
        {t('login')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={handleToggleModal}>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        {/* eslint-disable-next-line i18next/no-literal-string */}
        qwe
      </Modal>
    </div>
  );
};
