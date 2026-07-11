import { useState, type FormEvent } from 'react';
import { Button } from '../UI/Button';
import { useTranslation } from 'react-i18next';

interface AuthFormProps {
    onSuccess: () => void;
}

export function AuthForm({ onSuccess }: AuthFormProps) {
    const { t } = useTranslation();

    const [email, setEmail] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!email.trim()) {
            return;
        }

        onSuccess();
    };

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <label htmlFor="auth-email">{t('auth.email')}</label>
            <input
                id="auth-email"
                type="email"
                value={email}
                placeholder='blankExample@email.ru'
                onChange={(event) => setEmail(event.target.value)}
                required
            />

            <Button 
                variant="auth-submit"  
                type="submit" 
                disabled={!email.trim()}
                onClick={() => console.log("Отправка")}
            > 
                {t('auth.sendCode')}
            </Button>
        </form>
    );
}
