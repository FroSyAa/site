import { useTranslation } from 'react-i18next';
import './Navigation.scss';

const NAV_ITEMS = [
    { labelKey: 'navigation.aboutMe', href: '/about' },
    { labelKey: 'navigation.experience', href: '/experience' },
    { labelKey: 'navigation.skills', href: '/skills' },
    { labelKey: 'navigation.contacts', href: '/contacts' },
];

export function Navigation() {
    const { t } = useTranslation();

    return (
        <nav className="navigation">
            {NAV_ITEMS.map((item) => (
                <a 
                    key={item.href}
                    href={item.href}
                    className="navigation-link"
                >
                    {t(item.labelKey)}
                </a>
            ))}
        </nav>
    );
}