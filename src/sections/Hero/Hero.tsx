import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei'; // Импортируем Html для удобного позиционирования лоадера
import { useTranslation } from 'react-i18next';
import { useTypewriterCycle } from '../../hooks/useTypewriterCycle';
import Scene from '../../3Dcomponents/Scene';
import './Hero.scss';

const WORD_KEYS = [
    'hero.firstMessage',
    'hero.secondMessage',
    'hero.thirdMessage'
];

export function Hero() {
    const { t, i18n } = useTranslation();
    
    const translatedWords = WORD_KEYS.map(key => t(key));
    const text = useTypewriterCycle(translatedWords, 100, 50, 750, i18n.language);

    return (
        <section className="hero">
            <div className="hero__content">
                <h1 className="hero__h1">{t('hero.hello')}<br />{t('hero.me')}</h1>
                <h2 className="hero__h2">
                    {text}
                    <span className="cursor">|</span>
                </h2>
            </div>
            <div className="hero__visual" aria-hidden="true">
                <Canvas camera={{ position: [0, 0, 8], fov: 35 }} dpr={[1, 2]} shadows>
                    <Suspense fallback={
                        <Html center>
                            <div style={{ color: 'white', fontSize: '2rem' }}>Loading...</div>
                        </Html>
                    }>
                        <Scene />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
}