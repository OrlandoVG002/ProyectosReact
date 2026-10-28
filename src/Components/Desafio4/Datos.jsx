import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/**
 * Muestra el nombre de un usuario y un enlace a su pagina de detalles.
 * @param {Object} props - Props del componente
 * @param {string} props.user.name - Nombre completo del usuario
 * @param {string} props.user.id - Identificador de usuario
 */
export function Desafio04_01Datos({user}){
    return(
        <Card className="my-2">
            <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Link to={`/D04_01User/user/${user.id}`}>
                    <Card.Text>
                        <strong>Details: </strong>
                    </Card.Text>
                </Link>
            </Card.Body>
        </Card>
    )
}