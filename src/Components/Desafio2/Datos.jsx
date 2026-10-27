import { Card } from 'react-bootstrap';

/**
 * Muestra los datos principales de un usuario dentro de una card
 * @param {Object} props - Props del componente
 * @param {Object} props.user - Objeto que contiene la informacion del usuario
 * @param {string} props.user.name - Nombre completo del usuario
 * @param {string} props.user.username - Nombre de usuario (username)
 * @param {string} props.user.email - Correo electrónico de contacto
 * @param {string} props.user.phone - Numero de telefonico
 * @param {string} props.user.website - Sitio web personal o profesional
 * @param {Object} props.user.company - Informacion de la empresa donde trabaja
 * @param {string} props.user.company.name - Nombre de la empresa
 * @param {Object} props.user.address - Direccion residencial del usuario
 * @param {string} props.user.address.street - Calle de la direcion
 * @param {string} props.user.address.city - Ciudad de la direccion
 */
export function Desafio02_01Datos({user}){
    return(
        <Card className="mt-4">
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