import { useTranslation } from 'react-i18next';
import { Modal } from '../UI/Modal/Modal';
import { AuthForm } from './AuthForm';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
    const { t } = useTranslation();
    
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="auth-modal__content">
                <h2>{t('auth.title')}</h2>
                <AuthForm onSuccess={onClose} />
            </div>
        </Modal>
    );
}