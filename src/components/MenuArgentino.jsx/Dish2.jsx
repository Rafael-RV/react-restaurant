import React, { useEffect, useState } from 'react'
import { dataBase } from '../../firebase'
import { doc, getDoc } from 'firebase/firestore'
import Card from 'react-bootstrap/Card';
import image from '../../assets/img/image';
import '../CSS/stylesMenus.css'

export const Dish2 = () => {
  const asadoId = 'TA1nOytqAQKIyJidvgSo'; 
  const asadoDocRef = doc(dataBase, 'asados', asadoId);

  const [asado, setAsado] = useState(null);

  const getAsado = async () => {
    try {
      const docSnapshot = await getDoc(asadoDocRef);
      if (docSnapshot.exists()) {
        const asadoData = { ...docSnapshot.data(), id: docSnapshot.id };
        setAsado(asadoData);
      } else {
        console.log('El documento no existe.');
      }
    } catch (error) {
      console.error('Error al obtener el documento:', error);
    }
  }

  useEffect(() => {
    getAsado();
  }, []);

  return (
    <>
      {asado && (
        <Card className='card-style' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={image[1]} />
          <Card.Body>
            <Card.Title className='title-center'>{asado.name}</Card.Title>
            <Card.Text>{asado.details}</Card.Text>
            <Card.Title className='title-center'>{asado.price}</Card.Title>
          </Card.Body>
        </Card>
      )}
    </>
  )
}
