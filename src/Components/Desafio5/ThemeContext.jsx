import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

/**
 * Provee el tema actual y la función para alternarlo a los componentes descendientes.
 * @param {{children: import('react').ReactNode}} props Elementos que consumirán el contexto.
 * @returns {import('react').JSX.Element}
 */
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    /** Alterna el tema entre claro y oscuro. */
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
