import { Desafio03_01Datos } from "./Datos.jsx";
import { useUsersApi } from "./useUsersApi.js"

/** Obtiene los usuarios y muestra una card por cada usuario encontrado de la API*/
export function Desafio03_01Lista(){
    const { users, loading, error } = useUsersApi();

    if (loading) return (<p>Cargando usuarios...</p>);
    if (error) return <p>Hubo un error: {error}</p>;

    return(
        <div>
            {users.map((user) => (
                <Desafio03_01Datos key={user.id} user={user}/>
            ))}
        </div>
    )
}