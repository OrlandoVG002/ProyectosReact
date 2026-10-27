import {Desafio05_CIntro as Intro} from "../../Global/CIntro.jsx"

import {Desafio05_01Bloque1 as Bloque1} from "./Bloque1.jsx"
import {Desafio05_01Switch as ThemeSwitch} from "./ThemeSwitch.jsx"
import { ThemeProvider } from './ThemeContext.jsx';

/** Renderiza la introducción y los controles del desafío sobre Context. */
export function Desafio05_01Context(){
    /** @type {{title: string, desc: string}} Información descriptiva del desafío. */
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