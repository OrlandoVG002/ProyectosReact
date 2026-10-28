import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

/**
 * @property {String} ThemeContext - Contexto desde el que se obtiene el valor del tema
 * @property {String} themeContextValue - Valor del contexto, con el tema y su función para alternarlo
*/

/** Devuelve el valor actual de ThemeContext para el componente que lo consume */
function useTheme(){
    const themeContextValue = useContext(ThemeContext);
    return themeContextValue;
}

export default useTheme;