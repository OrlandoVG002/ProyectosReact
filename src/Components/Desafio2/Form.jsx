import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useUsersApiPlaceholder } from "./useUsersApiPlaceholder";
import { Desafio02_01Datos as Datos } from './Datos';

/**
 * Componente de formulario para la busqueda de usuarios por ID.
 * 
 * Gestiona el estado local del formulario de busqueda y conecta con el hook "useUsersApiPlaceholder" para controlar los estados de carga, error y renderizar el componente "<Datos />" cuando la consulta es exitosa
 */
export function Desafio02_01Form(){
    const [userID, setUserID] = useState('');
    const [searchedID, setSearchedID] = useState(null);
    const { user, loading, error } = useUsersApiPlaceholder(searchedID);
    const handleSubmit = (event) => {
        event.preventDefault();

        if (!userID) return;

        setSearchedID(Number(userID));
    };

    return (
        <div className="container-sm mb-5">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="inputID">Ingresa el ID</Form.Label>
                    <Form.Control
                        type="number"
                        id="inputID"
                        aria-describedby="inputIDHelp"
                        min="1"
                        step="1"
                        required
                        value={userID}
                        onChange={(e) => setUserID(e.target.value)}
                    />
                    <Form.Text id="inputIDHelp" muted>
                        Escribe el ID del usuario que estás buscando.
                    </Form.Text>
                </Form.Group>
                <Button type="submit" variant="primary">
                    Buscar Usuario
                </Button>
            </Form>

            {loading && <p className="mt-3">Buscando usuario...</p>}
            {error && <p className="mt-3 text-danger">{error}</p>}
            {!loading && !error && searchedID !== null && !user && (
                <p className="mt-3">No se encontró un usuario con ese ID.</p>
            )}
            {user && (
                <Datos user={user}/>
            )}
        </div>
    )
}