import './Button.scss';
import type { ButtonProps } from '../../../types/button';

export function Button ({ 
    variant = 'primary', 
    children, 
    onClick, 
    disabled,
    type
}: ButtonProps) {
    return (
        <button 
            type={type}
            className={`button button--${variant}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};