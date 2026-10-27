import Lecciones from "./Lecciones.json";

/**
 * @typedef {Object} Desafio
 * @property {string} Leccion - Identificador de la leccion
 * @property {string} Desafio - Nombre del desafio individual
 * @property {string} url - Ruta de redirección para el desafio
 */

/**
 * @typedef {Object} LeccionAgrupada
 * @property {string} Leccion - Nombre de la leccion que agrupa los desafios
 * @property {Desafio[]} desafios - Lista de desafios pertenecientes a esa leccion
 */

/**
 * Arreglo de lecciones organizadas con sus respectivos desafios
 * Agrupa los elementos del arreglo original "Lecciones.json" basandose en la propiedad "Leccion"
 * 
 * @type {LeccionAgrupada[]}
 */
export const leccionesAgrupadas = Lecciones.reduce((grupos, desafio) => {
    let leccion = grupos.find((grupo) => grupo.Leccion === desafio.Leccion);

    if (!leccion) {
        leccion = { Leccion: desafio.Leccion, desafios: [] };
        grupos.push(leccion);
    }

    leccion.desafios.push(desafio);
    return grupos;
}, []);
