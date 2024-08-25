import { useState, ChangeEvent } from "react";

const Registro = () => {
  const [showForm, setShowForm] = useState(true);
  const [registro, setRegistro] = useState({
    nombre: '',
    apellido: '',
    userName: '',
    email: '',
    admin: false,
    password: '',
    confirmarPassword: '',

  })

  const handlerNombre = (event:ChangeEvent<HTMLInputElement>) => {
    setRegistro({
      ...registro,
      nombre: event.target.value
    })
  }
  const handlerApellido = (event:ChangeEvent<HTMLInputElement>) => {
    setRegistro({
      ...registro,
      apellido: event.target.value
    })
  }
  const handlerUserName = (event:ChangeEvent<HTMLInputElement>) => {
    setRegistro({
      ...registro,
      userName: event.target.value
    })
  }
  const handlerEmail = (event:ChangeEvent<HTMLInputElement>) => {
    setRegistro({
      ...registro,
      email: event.target.value
    })
  }
  const handlerPassword = (event:ChangeEvent<HTMLInputElement>) => {
    setRegistro({
      ...registro,
      password: event.target.value
    })
  }
  const handlerConfirmarPassword = (event:ChangeEvent<HTMLInputElement>) => {
    setRegistro({
      ...registro,
      confirmarPassword: event.target.value
    })
  }

  const handlerSubmit = (event: React.FormEvent) => {
    event?.preventDefault();
    setShowForm(false);
    setTimeout(() => {
      setShowForm(true);
    }, 500);
  };
  return (
    <div className=" min-h-screen">
      {showForm && (
        <div className=" flex justify-center items-center min-h-screen">
          <form onSubmit={handlerSubmit}>
            <div>
              <section className="text-center text-4xl font-bold">Registro</section>
              <section >
                <label>Nombre</label>
                <input
                type="text"
                placeholder="ramiro"
                value={registro.nombre}
                name="nombre"
                onChange={handlerNombre}
                className="text-black font-bold"
                />
              </section>

              <section>
                <label>Apellido</label>
                <input
                type="text"
                placeholder="pulido"
                value={registro.apellido}
                name="apellido"
                onChange={handlerApellido}
                className="text-black font-bold"
                />
              </section>

              <section>
                <label>Nick</label>
                <input
                type="text"
                placeholder="regeritos"
                value={registro.userName}
                name="userName"
                onChange={handlerUserName}
                className="text-black font-bold"
                />
              </section>
              <section>
                <label>Email</label>
                <input
                type="text"
                placeholder="regeritos58@ejemplo.com"
                value={registro.email}
                name="email"
                onChange={handlerEmail}
                className="text-black font-bold"
                />
              </section>
              <section>
                <label>Llave</label>
                <input
                type="password"
                // placeholder="regeritos"
                value={registro.password}
                name="password"
                onChange={handlerPassword}
                className="text-black font-bold"
                />
              </section>
              <section>
                <label>Confirme la llave</label>
                <input
                type="password"
                // placeholder="regeritos"
                value={registro.confirmarPassword}
                name="confirmarPassword"
                onChange={handlerConfirmarPassword}
                className="text-black font-bold"
                />
              </section>


              <section>
                <button type="submit">enviar</button>
              </section>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Registro;
