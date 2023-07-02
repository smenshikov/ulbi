import React, {
  FC, ReactNode, useCallback, useEffect,
} from 'react';
import classNames from 'classnames';
import { Portal } from 'shared/ui/portal/portal';
import { useTheme } from 'app/providers/theme-provider';
import styles from './modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: VoidFunction
}

export const Modal: FC<ModalProps> = ({
  className, children, onClose, isOpen,
}) => {
  const { theme } = useTheme();

  const handleClose = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  }, [handleClose]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <Portal>
      <div className={classNames(
        styles.modal,
        isOpen && styles.opened,
        styles[theme],
        className,
      )}
      >
        <div className={styles.overlay} onClick={handleClose}>
          <div
            className={styles.content}
            onClick={handleContentClick}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
