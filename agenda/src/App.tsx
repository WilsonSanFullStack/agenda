import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Registro from "./components/Registro";
import Inicio from "./components/Inicio";
import Sesion from "./components/Sesion";
import NavBar from "./components/NavBar";
import RegistroClientes from "./components/RegistroClientes";

function App() {
  const location = useLocation();
  // rutas donde la Navbar  no deberia aparecer
  const excludeNavPaths = ["/", "/registro", "/sesion"];
  return (
    <div className="">
      {!excludeNavPaths.includes(location.pathname) && <NavBar />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/" element={<Inicio />} />
        <Route path="/sesion" element={<Sesion />} />
        
        <Route path="/clientes" element={<RegistroClientes />} />
      </Routes>
    </div>
  );
}

export default App;
