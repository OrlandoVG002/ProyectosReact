import { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

/**
 * @typedef {Object} UseUsersApiPlaceholderResult
 * @property {Object|null} user - Datos del usuario a buscar en la API
 * @property {boolean} loading - Estado de carga de la peticion HTTP en proceso
 * @property {string} error - Mensaje de error en caso de que la peticion falle
 */

/**
 * Hook personalizado para consultar de forma asincrona un usuario por su ID.
 * 
 * @param {number|null} userId - Identificador de usuario buscar en la API, si no hay nada se cancela
 * @returns {UseUsersApiPlaceholderResult} Objeto con el estado actual de la peticion, datos encontrados, carga y errores.
 * 
 * @example
 * const { user, loading, error } = useUsersApiPlaceholder(1);
 */

export function useUsersApiPlaceholder(userId) {
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (userId === "") {
            return;
        }

        const controller = new AbortController();

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
