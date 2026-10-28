import {Desafio05_CIntro as Intro} from "../../Global/CIntro.jsx"

import {Desafio05_01Bloque1 as Bloque1} from "./Bloque1.jsx"
import {Desafio05_01Switch as ThemeSwitch} from "./ThemeSwitch.jsx"
import { ThemeProvider } from './ThemeContext.jsx';

/** 
 * @type {Object} Desafio - Objeto con el titulo y la descripcion del desafio actual
 * @property {string} title - Titulo principal del desafio actual
 * @property {string} desc - Descripcion del ejercicio
*/

/**
 * Renderiza unos bloques los cuales cambian de estilo dependiendo del "ThemeContext"
*/
export function Desafio05_01Context(){
    const Desafio = {
        title: "Desafio 5: Context",
        desc: "Se usa el context para cambiar el tema de un componente desde otro componente"
        }

    return (
        <div className="container-fluid bg-warning bg-opacity-75 d-flex flex-column justify-content-center">
            <Intro title={Desafio.title} desc={Desafio.desc}/>
            <ThemeProvider>
                <div className="container-sm">
                    <ThemeSwitch />
                
                </div>
                <div className="container-lg d-flex gap-2 cubo"> 
                    <Bloque1 />
                    <Bloque1 />
                </div>
            </ThemeProvider>
        </div>
    )
}