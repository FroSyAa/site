import { useTranslation } from "react-i18next"
import './AboutMe.scss';

export function AboutMe () { 

    const { t } = useTranslation();

    return (
        <section id="aboutMe" className="about-me">
            <div className="photo">
                
            </div>
            <div className="about-me__content">
                <h1 className="about-me__h1">
                    {t('aboutMe.about')}
                </h1>
                <h3 className="about-me__h3">
                    {t('aboutMe.me')} <br />
                    {t('aboutMe.firstText')} <br />
                    {t('aboutMe.secondText')} <br />
                    {t('aboutMe.thirdText')}
                </h3>
            </div>
        </section>
    )
}