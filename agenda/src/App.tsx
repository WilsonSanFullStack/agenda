import { Routes, Route  } from "react-router-dom"
import Home from "./components/Home"
import Registro from "./components/registro"

function App() {

  return (
    <div className="">
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registro" element={<Registro />} />
     </Routes>
    </div>
  )
}

export default App
