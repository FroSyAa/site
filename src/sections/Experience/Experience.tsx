import { useTranslation } from "react-i18next";
import './Experience.scss'

const EXPERIENCE_KEYS = [
    'experience.items.0',
    'experience.items.1',
    'experience.items.2'
];

export function Experience() {
    const { t } = useTranslation();

    const experiences = EXPERIENCE_KEYS.map(key => ({
        date: t(`${key}.date`),
        position: t(`${key}.position`),
        description: t(`${key}.description`)
    }));

    return (
        <section className="experience">
            <h1 className="experience__h1">{t('experience.title')}</h1>
            
            <div className="experience__timeline" />
            
            {experiences.map((exp, index) => (
                <div key={index} className="experience__block">
                    <div className="experience__date">{exp.date}</div>
                    <div className="experience__position">{exp.position}</div>
                    <div className="experience__description">{exp.description}</div>
                </div>
            ))}
        </section>
    )
}