import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <Navbar  expand="lg" >
            <Container >
                <Navbar.Brand as={Link} to="/">Asados del Sur</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav  >
                        <Nav.Link as={Link} to= "/">Inicio</Nav.Link>
                        <Nav.Link as={Link} to= "/reservaciones">Reservaciones</Nav.Link>
                        <Nav.Link as={Link} to= "/contacto">Contacto</Nav.Link>
                        <NavDropdown title="Menús" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/menus/asadochileno">
                                Asado Chileno
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/menus/asadoArgentino">
                                Asado Argentino
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

