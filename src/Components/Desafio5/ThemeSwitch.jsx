import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

/** Muestra el tema actual y permite alternarlo desde la interfaz. */
export function Desafio05_01Switch(){
    const { theme, toggleTheme } = useContext(ThemeContext);

    return(
        <div className='my-3'>
            <p>El tema elegido es: {theme}</p>
            <button 
                onClick={toggleTheme} 
                className={`btn btn-${theme === 'light' ? 'dark' : 'light'}`}
            >
                Cambiar Tema
            </button>
        </div>
    )
}