import { createContext, useContext, ReactNode } from 'react';
import { useLoading } from '../hooks/useLoading';
import { LoadingContext } from '../types/loading'

const LoadingContext = createContext<LoadingContext | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
    const loadingState = useLoading(true); // По умолчанию загружаемся

    return (
        <LoadingContext.Provider value={loadingState}>
            {children}
        </LoadingContext.Provider>
    );
}

export function useAppLoading() {
    const context = useContext(LoadingContext);
    if (!context) throw new Error('useAppLoading must be used within LoadingProvider');
    return context;
}