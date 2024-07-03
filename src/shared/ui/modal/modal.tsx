import React, {
  FC, ReactNode, useCallback, useEffect, useState,
} from 'react';
import classNames from 'classnames';
import { Portal } from 'shared/ui/portal/portal';
import styles from './modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: VoidFunction
    lazy?: boolean;
}

export const Modal: FC<ModalProps> = ({
  className, children, onClose, isOpen, lazy,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

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

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(
        styles.modal,
        isOpen && styles.opened,
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
