import React, { useEffect, useState } from 'react';
import { dataBase } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import Card from 'react-bootstrap/Card';
import image from '../../assets/img/image';
import '../CSS/stylesMenus.css'


export const Dish1 = () => {
  const asadoId = '31wHT0cUpj6XhgfIvSfh'; 
  const asadoChilenoDocRef = doc(dataBase, 'asadoChileno', asadoId);
  const [asadoChileno, setAsadoChileno] = useState(null);

  const getData = async () => {
    try {
      const docSnapshot = await getDoc(asadoChilenoDocRef);
      if (docSnapshot.exists()) {
        const asadoChilenoData = { ...docSnapshot.data(), id: docSnapshot.id };
        setAsadoChileno(asadoChilenoData);
      } else {
        console.log('El documento no existe.');
      }
    } catch (error) {
      console.error('Error al obtener el documento:', error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {asadoChileno && (
        <Card className='card-style' style={{ width: '18rem' }}>
          <Card.Img className='card-image' variant="top" src={image[3]} />
          <Card.Body>
            <Card.Title className='title-center'>{asadoChileno.name}</Card.Title>
            <Card.Text>{asadoChileno.details}</Card.Text>
            <Card.Title className='title-center'>{asadoChileno.price}</Card.Title>
          </Card.Body>
        </Card>
      )}
    </>
  )
}
