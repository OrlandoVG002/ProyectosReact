import { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

/**
 * @typedef {Object} useUserDetailsResult
 * @property {Object} users - Datos del los usuarios
 * @property {boolean} loading - Estado de carga de la peticion HTTP en proceso
 * @property {string} error - Mensaje de error en caso de que la peticion falle
*/

/**
 * Hook personalizado para consultar de forma asincrona los datos de 1 usuario a la vez
 * 
 * @returns {useUserDetailsResult} Objeto con el estado actual de la peticion, datos encontrados, carga y errores.
*/
export function useUserDetails(userId) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (userId === null) {
            return;
        }

        const controller = new AbortController();

        /** Ejecuta la solicitud HTTP para obtener los detalles del usuario. */
        async function fetchUsers() {
            setLoading(true);
            setUser(null);
            setError("");

            try {
                const response = await fetch(`${url}/${userId}`, {
                    signal: controller.signal,
                });

                if (!response.ok) {
                    throw new Error(`Error al consultar usuario: ${response.status}`);
                }

                const data = await response.json();
                setUser(data.id ? data : null);
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
    }, [userId]);

    return { user, loading, error };
}
