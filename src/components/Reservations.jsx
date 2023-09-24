import React, { useState } from 'react';
import { ReservationsT } from './ReservationsT';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../components/CSS/fondo.css';
import '../assets/img/fondo.jpg';


export const Reservations = () => {
  const [startDate, setStartDate] = useState(new Date());

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const handleAlertClick = () => {
    const reservedDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedSelectedDate = startDate.toLocaleDateString('es-ES', options);
    alert(`Fecha reservada: ${formattedSelectedDate}`);
  };

  return (
    <div className="contenedor-con-fondo">
      <ReservationsT />
      <div className='calendly'>
        <ReactDatePicker
          selected={startDate}
          onChange={handleDateChange}
          className="datepicker-custom"
        />
        <button className='buttonR' onClick={handleAlertClick} >
          Reservar
        </button>
      </div>
    </div>
  );
};
