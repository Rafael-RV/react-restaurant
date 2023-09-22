import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { ContactD } from './contactD';
import '../components/CSS/fondo.css';


export const Contact = () => {
  return (
  <div className="contenedor-con-fondo">
    <ContactD/>
    <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail" className="col-auto">
      <Form.Label>Nombre y Apellido</Form.Label>
      <Form.Control type="text" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword" className="col-auto">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" />
    </Form.Group>
  </Row>

  <div className="mb-3"/>
    <label htmlFor="motivoContacto" className="form-label">Motivo de Contacto</label>
    <Form.Control
      as="textarea"
      rows={3}
      id="motivoContacto"
      className="form-control-sm"
      style={{ width: '300px', height: '100px' }}
      
    />

  <Button variant="primary" type="submit">
    Enviar
  </Button>
</Form>

    </div>
  );
}
