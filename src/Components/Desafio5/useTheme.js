import { useContext } from "react";
import ThemeContext from "./ThemeContext";

/** Devuelve el valor actual de ThemeContext para el componente que lo consume. */
function useTheme(){
    const themeContextValue = useContext(ThemeContext);
    return themeContextValue;
}

export default useTheme;