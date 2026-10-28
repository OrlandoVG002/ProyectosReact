import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext.jsx';
import "./Styles.css"

/** Muestra el tema actual, leído desde ThemeContext. */
/**
 * @typedef {Object} useContext
 * @property {String} theme - Tema de estilos
 * @property {String} ThemeContext - Tema usado actualmente
*/
export function Desafio05_01Bloque1(){
    const { theme } = useContext(ThemeContext);

    return(
        <div className={`align-content-center text-center container-sm ${theme}`}>
            <h2>Hola tema: {theme}</h2>
        </div>
    )
}