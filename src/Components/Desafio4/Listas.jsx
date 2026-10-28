import { Desafio04_01Datos } from "./Datos.jsx";
import { useUsersApi } from "./useUsersApi.js"

/** 
 * @typedef {Object} useUsersApi
 * @property {Object} user - Los datos del usuario cargado.
 * @property {boolean} loading - Indicador del estado de carga de la API.
 * @property {string} error - Mensaje de error en caso de fallo.
*/

/** Obtiene todos los usuarios de la API y los muestra enviando los datos de ID*/
export function Desafio04_01Lista(){
    const { users, loading, error } = useUsersApi();

    if (loading) return (<p>Cargando usuarios...</p>);
    if (error) return <p>Hubo un error: {error}</p>;

    return(
        <div className="container-lg">
            {users.map((user) => (
                <Desafio04_01Datos key={user.id} user={user}/>
            ))}
        </div>
    )
}