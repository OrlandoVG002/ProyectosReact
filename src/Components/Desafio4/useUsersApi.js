import { useEffect, useState } from "react";

/** @constant {string} URL base de la API de usuarios. */
const url = "https://jsonplaceholder.typicode.com/users";

/**
 * Obtiene la lista de usuarios de JSONPlaceholder.
 * @returns {{users: object[]|null, loading: boolean, error: string}} Estado y resultados de la consulta.
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
