import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Inicio } from "./routes/Inicio"
import { Reservaciones } from "./routes/Reservaciones"
import { Contacto } from "./routes/Contacto"
import { AsadoArgentino } from "./routes/menus/AsadoArgentino"
import { AsadoChileno } from "./routes/menus/AsadoChileno"
import { Main } from "./components/main"





function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/react-restaurant/" element={<Inicio />} />
        <Route path="/react-restaurant/reservaciones" element={<Reservaciones />} />
        <Route path="/react-restaurant/contacto" element={<Contacto />} />
        <Route path="/react-restaurant/reserva" element={<Reservaciones />} />
        <Route path="/react-restaurant/menus/asadoargentino" element={<AsadoArgentino />} />
        <Route path="/react-restaurant/menus/asadochileno" element={<AsadoChileno />} />
       
      </Routes>
      


    </>
  )
}

export default App
