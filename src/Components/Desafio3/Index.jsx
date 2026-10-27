import {Desafio05_CIntro as Intro} from "../../Global/CIntro.jsx"

import {Desafio03_01Lista as Lista} from "./Listas.jsx"

/** 
 * @type {Object} Desafio - Objeto con el titulo y la descripcion del desafio actual
 * @property {string} title - Titulo principal del desafio actual
 * @property {string} desc - Descripcion del ejercicio
*/

/**
 * Renderiza una lista de cards de usuarios
 */

export function Desafio03_01Map(){
    const Desafio = {
        title: "Desafio 3: Map",
        desc: "Se usa Map junto con key para crear elementos atraves de una lista de objetos obtenidos de una Api y un map"
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