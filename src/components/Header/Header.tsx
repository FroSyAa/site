import './Header.scss';
import { Navigation } from "../Navigation"
import { Button } from "../UI/Button"
import { StyleSwitch } from '../UI/StyleSwitch';
import { AuthModal } from '../Auth/AuthModal';
import { useModal } from '../../hooks/useModal';
import { useTranslation } from 'react-i18next';
import { LanguageSwitch } from '../UI/LanguageSwitch/LanguageSwitch';

export function Header() {
    const { openModal, closeModal, currentModal } = useModal();
    const { t } = useTranslation();

    return (
        <>
            <header className="header">
                <a className="header__brand" href="/" >
                    {t('header.brand')}
                </a>
                <div className="header__nav">
                    <Navigation />
                </div>
                <div className="header__actions">
                    <StyleSwitch />
                    <LanguageSwitch />
                    <Button variant="auth" type="button" onClick={() => openModal('auth')}>
                        {t('header.login')}
                    </Button>
                </div>
            </header>

            <AuthModal isOpen={currentModal === 'auth'} onClose={closeModal} />
        </>
    )
}