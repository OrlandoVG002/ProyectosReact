import { Desafio04_01Datos } from "./Datos.jsx";
import { useUsersApi } from "./useUsersApi.js"

/** Obtiene los usuarios y muestra carga, error o tarjetas enlazadas a sus detalles. */
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