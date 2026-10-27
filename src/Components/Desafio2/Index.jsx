import {Desafio05_CIntro as Intro} from "../../Global/CIntro.jsx"

import {Desafio02_01Form as Formulario} from "./Form.jsx"

/** 
 * @type {Object} Desafio - Objeto con el titulo y la descripcion del desafio actual
 * @property {string} title - Titulo principal del desafio actual
 * @property {string} desc - Descripcion del ejercicio
*/

/**
 * Renderiza el formulario de consulta en API
 */
export function Desafio02_01API(){
    const Desafio = {
        title: "Desafio 2: API",
        desc: "Se llama a una API para buscar a un usuario dentro de esta, solo buscando el usuario y no descargando toda la base de datos"
        }
    return (
        <div className="container-fluid bg-warning bg-opacity-75 d-flex flex-column justify-content-center">
            <Intro title={Desafio.title} desc={Desafio.desc}/>
            <div>
                <Formulario />
            </div>
        </div>
    )
}
