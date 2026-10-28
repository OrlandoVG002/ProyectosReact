import { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

/**
 * @typedef {Object} useUsersApiResult
 * @property {Object} users - Datos del los usuarios
 * @property {boolean} loading - Estado de carga de la peticion HTTP en proceso
 * @property {string} error - Mensaje de error en caso de que la peticion falle
*/

/**
 * Hook personalizado para consultar de forma asincrona los datos de varios usuarios.
 * 
 * @returns {UseUsersApiResult} Objeto con el estado actual de la peticion, datos encontrados, carga y errores.
*/
export function useUsersApi() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();

        /** Ejecuta la solicitud HTTP para obtener la lista de usuarios. */
        async function fetchUsers() {
            setLoading(true);
            setUsers(null);
            setError("");

            try {
                const response = await fetch(`${url}`, {
                    signal: controller.signal,
                });

                if (!response.ok) {
                    throw new Error(`Error al consultar usuarios: ${response.status}`);
                }

                const data = await response.json();
                setUsers(data);

            } catch (err) {
                if (err.name !== "AbortError") {
                    setError(err instanceof Error ? err.message : "Error desconocido");
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        }

        fetchUsers();

        return () => controller.abort();
    }, []);

    return { users, loading, error };
}
