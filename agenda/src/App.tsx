import { Routes, Route  } from "react-router-dom"
import Home from "./components/Home"
import Registro from "./components/Registro"
import RegistroUsuarios from "./components/RegistroUsuarios"

function App() {

  return (
    <div className="">
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/clientes" element={<RegistroUsuarios />} />
     </Routes>
    </div>
  )
}

export default App
