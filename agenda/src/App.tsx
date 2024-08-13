import { Routes, Route  } from "react-router-dom"
import Home from "./components/Home"

function App() {

  return (
    <div className="bg-slate-700">
     <Routes>
      <Route path="/" element={<Home />} />
     </Routes>
    </div>
  )
}

export default App
