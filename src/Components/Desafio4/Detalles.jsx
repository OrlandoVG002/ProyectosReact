import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { useUserDetails } from "./useUserDetails.js";

/** Carga y presenta los detalles del usuario identificado en la URL. */
export function Desafio04_01Details(){
    const { id } = useParams();
    const { user, loading, error } = useUserDetails(id);
    
    if (loading) return (<p>Cargando usuarios...</p>);
    if (error) return <p>Hubo un error: {error}</p>;
    if (!user) return <p>No se encontró el usuario.</p>;

    return(
        <Card className="my-2">
            <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                    <strong>Usuario:</strong> {user.username}<br />
                    <strong>Email:</strong> {user.email}<br />
                    <strong>Teléfono:</strong> {user.phone}<br />
                    <strong>Sitio web:</strong> {user.website}<br />
                    <strong>Empresa:</strong> {user.company.name}<br />
                    <strong>Dirección:</strong> {user.address.street}, {user.address.city}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}