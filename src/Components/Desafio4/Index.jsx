import {Desafio05_CIntro as Intro} from "../../Global/CIntro.jsx"

import {Desafio04_01Lista as Lista} from "./Listas.jsx"

/** 
 * @type {Object} Desafio - Objeto con el titulo y la descripcion del desafio actual
 * @property {string} title - Titulo principal del desafio actual
 * @property {string} desc - Descripcion del ejercicio
*/

/**
 * Renderiza una lista de cards de usuarios y da paso a la navegacion hacia los detalles de estos
*/

export function Desafio04_01Router(){
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