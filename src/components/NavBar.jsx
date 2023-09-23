import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './CSS/NavBar.css';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand  as={Link} to="/react-restaurant/">
          Asados del Sur
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/react-restaurant/">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/react-restaurant/reservaciones">
              Reservaciones
            </Nav.Link>
            <Nav.Link as={Link} to="/react-restaurant/contacto">
              Contacto
            </Nav.Link>
            <NavDropdown title="Menús" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/react-restaurant/menus/asadochileno">
                Asado Chileno
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/react-restaurant/menus/asadoArgentino">
                Asado Argentino
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
