import { useTranslation } from "react-i18next";
import './Skills.scss';

export function Skills () {
    const { t } = useTranslation();

    return (
        <section className="skills" id="skills">
            <div className="skills__hard-skills">
                <h1 className="skills__h1">{t('skills.titleHard')}</h1>
            </div>
            <div className="skills__soft-skills">
                <h1 className="skills__h1">{t('skills.titleSoft')}</h1>
            </div>
        </section>
    )
}