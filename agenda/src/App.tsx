import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Registro from "./components/Registro";
import RegistroUsuarios from "./components/RegistroUsuarios";
import Inicio from "./components/Inicio";
import Sesion from "./components/Sesion";

function App() {
  return (
    <div className="">
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
