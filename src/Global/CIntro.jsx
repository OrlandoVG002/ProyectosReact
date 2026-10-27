/**
 * Componente de "Titulo" y "Descripcion"
 * 
 * @param {Object} props - Propiedades del componente
 * @param {string} props.title - Titulo principal que se mostrara en el encabezado
 * @param {string} props.desc - Descripcion del proyecto
 */

export function Desafio05_CIntro({title, desc}){
    return (
        <div className="container-md justify-content-center my-3 border-1 border-black border rounded">
            <h1>{title}</h1>
            <p className=" ps-2">{desc}</p>
        </div>
    )
}