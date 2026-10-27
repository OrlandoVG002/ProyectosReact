import { Card } from 'react-bootstrap';

/**
 * Card con el nombre y el email de un usuario
 * @param {Object} props - Props del componente
 * @param {string} props.user.name - Nombre completo del usuario
 * @param {string} props.user.email - Correo electrónico de contacto
 */
export function Desafio03_01Datos({user}){
    return(
        <Card className="my-2">
            <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                    <a href={`mailto:${user.email}`} className="text-decoration-none"><strong>Email: </strong>{user.email}</a>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}