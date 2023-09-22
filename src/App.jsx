import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Inicio } from "./routes/Inicio"
import { Reservaciones } from "./routes/Reservaciones"
import { Contacto } from "./routes/Contacto"
import { AsadoArgentino } from "./routes/menus/AsadoArgentino"
import { AsadoChileno } from "./routes/menus/AsadoChileno"
import { Footer } from "./components/Footer"






function App() {


  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/reservaciones" element={<Reservaciones />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/menus/asadoargentino" element={<AsadoArgentino />} />
        <Route path="/menus/asadochileno" element={<AsadoChileno />} />
      </Routes>

      <Footer/>





    </>
  )
}

export default App
