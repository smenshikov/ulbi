import React, { FC } from 'react';
import { Modal } from 'shared/ui/modal/modal';
import { LoginForm } from '../login-form/login-form';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: VoidFunction
}

export const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }) => (
  <Modal className={className} isOpen={isOpen} onClose={onClose} lazy>
    <LoginForm />
  </Modal>
);
