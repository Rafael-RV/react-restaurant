import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { ContactD } from './contactD';

export const Contact = () => {
  return (
  <>
    <ContactD/>
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Nombre y Apellido</Form.Label>
          <Form.Control type="email"  />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text"  />
        </Form.Group>
      </Row>


      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Motivo de Contacto</Form.Label>
        <Form.Control  />
      </Form.Group>

      <Button variant="primary" type="submit">
     Enviar
      </Button>
    </Form>
    </>
  );
}
