import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { dataBase } from '../../firebase'
import Card from 'react-bootstrap/Card';
import chileno from '../../assets/img/chileno.jpeg'

export const AsadoChileno = () => {
  const asadoChilenoCollectionRef = collection(dataBase, 'asadoChileno');
  const [asadoChileno, setAsadoChileno] = useState([]);
  
  const getData = async () => {
    const data = await getDocs(asadoChilenoCollectionRef);
    const asadoChilenoData = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    setAsadoChileno(asadoChilenoData);
   
  }

  useEffect(() => {
    getData();
  }, []);

  return (
<>
      {
        asadoChileno.map(asadoCh => (
          <Card key={asadoCh.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={chileno} />
            <Card.Body >
              <Card.Title>{asadoCh.name}</Card.Title>
              <Card.Text>{asadoCh.details}</Card.Text>
              <Card.Text>{asadoCh.price} </Card.Text>

            </Card.Body>
          </Card>))
      }

    </>
  )
}





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
