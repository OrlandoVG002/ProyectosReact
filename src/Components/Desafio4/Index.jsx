import {Desafio05_CIntro as Intro} from "../../Global/CIntro.jsx"

import {Desafio04_01Lista as Lista} from "./Listas.jsx"

/** Renderiza la introducción y la lista del desafío de navegación. */
export function Desafio04_01Router(){
    /** @type {{title: string, desc: string}} Información descriptiva del desafío. */
    const Desafio = {
        title: "Desafio 4: Router",
        desc: "Se usa React router para acceder a distintas partes del proyecto por su url, a su vez igual se usan las url con parametros para acceder a paginas de variables nuevas"
        }

    return (
        <div className="container-fluid bg-warning bg-opacity-75 d-flex flex-column justify-content-center">
            <Intro title={Desafio.title} desc={Desafio.desc}/>
            <div>
                <Lista />
            </div>
        </div>
    )
}