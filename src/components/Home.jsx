import React from 'react';
import '../components/CSS/fondo.css';

export const Home = (props) => {
  return (
    <div className="contenedor-con-fondo">
      <h1 className='texto-blanco'>{props.titulo}</h1> 
      <h3 className='texto-blanco'>
        Déjate llevar por un viaje culinario único que te transportará directamente a las
        tradicionales parrillas de Chile y Argentina. Nuestro restaurante es el lugar perfecto
        para los amantes de la carne y la parrilla.

        En "Asados del Sur," hemos fusionado las mejores recetas y cortes de carne de Chile
        y Argentina para ofrecerte una experiencia gastronómica inigualable.
        Nuestros chefs expertos, apasionados por la parrilla, seleccionan cuidadosamente
        los cortes más tiernos y sabrosos, preparándolos con autenticidad y dedicación.
      </h3>
    </div>
  );
};
