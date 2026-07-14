import './Header.scss';
import { Navigation } from "../Navigation"
import { StyleSwitch } from '../UI/StyleSwitch';
import { useTranslation } from 'react-i18next';
import { LanguageSwitch } from '../UI/LanguageSwitch/LanguageSwitch';

export function Header() {
    const { t } = useTranslation();

    return (
        <header className="header">
            <a className="header__brand" href="/#" >
                {t('header.brand')}
            </a>
            <div className="header__nav">
                <Navigation />
            </div>
            <div className="header__actions">
                <StyleSwitch />
                <LanguageSwitch />
            </div>
        </header>
    )
}