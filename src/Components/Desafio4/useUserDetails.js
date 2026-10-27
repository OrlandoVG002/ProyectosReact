import { useEffect, useState } from "react";

/** @constant {string} URL base de la API de usuarios. */
const url = "https://jsonplaceholder.typicode.com/users";

/**
 * Consulta los detalles de un usuario específico.
 * @param {string|undefined} userId ID del usuario recibido desde la ruta.
 * @returns {{user: object|null, loading: boolean, error: string}} Estado y resultado de la consulta.
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
