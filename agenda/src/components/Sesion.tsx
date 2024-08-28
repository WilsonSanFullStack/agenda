import { useState } from "react";


const Sesion = () => {

  const [showForm, setShowForm] = useState(true)


  const handlerSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setShowForm(false)
  }
  return (
    <div className="min-h-screen" >
      {showForm && (
        <div>
          <form onSubmit={handlerSubmit}>
            <div>
              <section>
                <input type="text" />
              </section>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default Sesion;