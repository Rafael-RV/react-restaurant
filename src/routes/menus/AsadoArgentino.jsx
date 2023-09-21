import React, { useEffect, useState } from 'react'
import { dataBase } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore'
import Card from 'react-bootstrap/Card';
import argentina from '../../assets/img/argentina.jpeg'

export const AsadoArgentino = () => {

  const asadosCollectionRef = collection(dataBase, 'asados');
  const [asados, setAsados] = useState([]);

  const getAsados = async () => {
    const dataAsados = await getDocs(asadosCollectionRef);
    const asadoData = (dataAsados.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    setAsados(asadoData);
    
  }
  useEffect(() => {

    getAsados()

  }, [])

  return (
    <>
      {
        asados.map(asado => (
          <Card key={asado.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={argentina} />
            <Card.Body >
              <Card.Title>{asado.name}</Card.Title>
              <Card.Text>{asado.details}</Card.Text>
              <Card.Text>{asado.price} </Card.Text>

            </Card.Body>
          </Card>))
      }

    </>
  )
}

