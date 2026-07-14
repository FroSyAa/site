import './Preloader.scss';

export function Preloader() {
    return (
        <div className="preloader" role="status" aria-live="polite" aria-label="Загрузка страницы">
            <div className="preloader__grid">
                <span className="preloader__square preloader__square--1" />
                <span className="preloader__square preloader__square--2" />
                <span className="preloader__square preloader__square--3" />
                <span className="preloader__square preloader__square--4" />
            </div>
            <span className="visually-hidden">Загрузка...</span>
        </div>
    );
}
