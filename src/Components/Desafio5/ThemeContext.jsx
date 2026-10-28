import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

/** 
 * @typedef {Object} ThemeContextType
 * @property {string} theme - Tema en uso
 * @property {toggleTheme} toggleTheme - Funcion para cambiar el tema
*/

/** 
* @typedef {Object} children 
* @property {React.ReactNode} props.children - Componentes que se afectaran por el contexto del "Theme"
*/

/** Provee el tema actual y la función para alternar a los componentes descendientes */

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
