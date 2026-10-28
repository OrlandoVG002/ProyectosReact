import React from 'react';
import useTheme from './useTheme';

/**
 * @typedef {Object} useContext
 * @property {String} theme - Tema de estilos
 * @property {String} ThemeContext - Tema usado actualmente
*/

/** Muestra el tema actual y da un boton para alternarlo desde la interfaz */
export function Desafio05_01Switch(){
    const { theme, toggleTheme } = useTheme();

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