import React, { useState } from 'react';
import { ReservationsT } from './ReservationsT';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const Reservations = () => {
  const [startDate, setStartDate] = useState(new Date());

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const handleAlertClick = () => {
    const reservedDate = new Date(); // Supongamos que esta es la fecha reservada.

    // Configura el idioma español para mostrar la fecha.
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    const formattedSelectedDate = startDate.toLocaleDateString('es-ES', options);

    alert(`Fecha reservada: ${formattedSelectedDate}`);
  };

  return (
    <div>

      <ReservationsT />
      
      <ReactDatePicker
        showIcon
        selected={startDate}
        onChange={handleDateChange}
      />
      <button onClick={handleAlertClick}>Reservar Fecha</button>

    </div>
  );
};
