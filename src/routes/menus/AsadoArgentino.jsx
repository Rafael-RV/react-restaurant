import React, { useEffect, useState } from 'react'
import { dataBase } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore'
import Card from 'react-bootstrap/Card';


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
            <Card.Img variant="top" src="holder.js/100px180" />
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

