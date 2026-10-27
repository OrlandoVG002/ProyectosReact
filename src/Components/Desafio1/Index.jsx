import {Desafio05_CIntro as Intro} from "../../Global/CIntro.jsx"

import { Desafio01_01Barra as Barra } from "./Barra";
import { Desafio01_01Nombre as Nombre } from "./Nombre";
import { Desafio01_01SubTitulo as SubTitulo } from "./SubTitulo";
import "./Index.css";

/** 
 * @type {Object} Desafio - Objeto con el titulo y la descripcion del desafio actual
 * @property {string} title - Titulo principal del desafio actual
 * @property {string} desc - Descripcion del ejercicio
*/

/**
 * Renderiza la carta principal del desafio
 */
export function Desafio01_01Carta() {
    const Desafio = {
        title: "Desafio 1: CartaModular",
        desc: "Se llama a una API para buscar a un usuario dentro de esta, solo buscando el usuario y no descargando toda la base de datos"
        }

    return(
        <div className="container-fluid bg-warning bg-opacity-75 d-flex flex-column justify-content-center">
            <div>
                <Barra />
                <Nombre />
                <SubTitulo />
                <Barra />
            </div>
            <Intro title={Desafio.title} desc={Desafio.desc}/>
        </div>
    );
}
