import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Registro from "./components/Registro";
import RegistroUsuarios from "./components/RegistroUsuarios";
import Inicio from "./components/Inicio";
import Sesion from "./components/Sesion";
import NavBar from "./components/NavBar";

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
        <Route path="/clientes" element={<RegistroUsuarios />} />
        <Route path="/" element={<Inicio />} />
        <Route path="/sesion" element={<Sesion />} />
      </Routes>
    </div>
  );
}

export default App;
