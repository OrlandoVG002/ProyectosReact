import { Link } from "react-router-dom";
import { Fragment } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { leccionesAgrupadas } from "../Data/leccionesAgrupadas";

/**
 * Renderiza la barra de navegación y el menú de desafíos agrupados.
 * 
 * Genera dinamicamente el menu desplegable de "Desafios" y "Proyectos" recorriendo Lecciones.json
 * 
 * @see leccionesAgrupadas - Estructura de datos utilizada para renderizar el submenu
 */
export function NavbarComp() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand as={Link} to="/">
                Desafios y Proyectos
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">
                        Home
                    </Nav.Link>
                    <NavDropdown title="Desafios" id="DesafiosNavDropdown">
                        {leccionesAgrupadas.map((leccion, index) => (
                            <Fragment key={leccion.Leccion}>
                                <NavDropdown.Header>
                                    {leccion.Leccion}
                                </NavDropdown.Header>
                                {leccion.desafios.map((desafio) => (
                                    <NavDropdown.Item
                                        as={Link}
                                        to={desafio.url}
                                        key={`${desafio.Desafio}-${desafio.url}`}
                                    >
                                        {desafio.Desafio}
                                    </NavDropdown.Item>
                                ))}
                                {index < leccionesAgrupadas.length - 1 && (
                                    <NavDropdown.Divider />
                                )}
                            </Fragment>
                        ))}
                    </NavDropdown>
                    <NavDropdown title="Proyectos" id="ProyectosNavDropdown">
                        <NavDropdown.Item href="#action/3.1">
                            Action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                            Something
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);
}
