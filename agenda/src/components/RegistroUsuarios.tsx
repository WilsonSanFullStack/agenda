import { useState, ChangeEvent } from "react";

const RegistroUsuarios = () => {
  const [showForm, setShowForm] = useState(true);
  const [registro, setRegistro] = useState({
    nombre: "",
    apellido: "",
    userName: "",
    email: "",
    admin: false,
    password: "",
    confirmarPassword: "",
  });

  const handlerNombre = (event: ChangeEvent<HTMLInputElement>) => {
    setRegistro({
      ...registro,
      nombre: event.target.value,
    });
  };
  const handlerApellido = (event: ChangeEvent<HTMLInputElement>) => {
    setRegistro({
      ...registro,
      apellido: event.target.value,
    });
  };
  const handlerUserName = (event: ChangeEvent<HTMLInputElement>) => {
    setRegistro({
      ...registro,
      userName: event.target.value,
    });
  };
  const handlerEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setRegistro({
      ...registro,
      email: event.target.value,
    });
  };
  const handlerPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setRegistro({
      ...registro,
      password: event.target.value,
    });
  };
  const handlerConfirmarPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setRegistro({
      ...registro,
      confirmarPassword: event.target.value,
    });
  };

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
              <section className="text-center text-4xl font-bold">
                Registro
              </section>
              <section className="flex justify-center items-center m-1 ">
                <input
                  type="text"
                  placeholder="escriba su nombre"
                  value={registro.nombre}
                  name="nombre"
                  onChange={handlerNombre}
                  className="text-black font-bold text-center border-gray-600 border-2 "
                />
              </section>

              <section className="flex justify-center items-center m-1 ">
                <input
                  type="text"
                  placeholder="escriba su apellido"
                  value={registro.apellido}
                  name="apellido"
                  onChange={handlerApellido}
                  className="text-black font-bold text-center border-gray-600 border-2 "
                />
              </section>

              <section className="flex justify-center items-center m-1 ">
                <input
                  type="text"
                  placeholder="como te llamamos"
                  value={registro.userName}
                  name="userName"
                  onChange={handlerUserName}
                  className="text-black font-bold text-center border-gray-600 border-2 "
                />
              </section>

              <section className="flex justify-center items-center m-1 ">
                <input
                  type="text"
                  placeholder="escriba un correo"
                  value={registro.email}
                  name="email"
                  onChange={handlerEmail}
                  className="text-black font-bold text-center border-gray-600 border-2 "
                />
              </section>

              <section className="flex justify-center items-center m-1 ">
                <input
                  type="password"
                  placeholder="digite una contraseña"
                  value={registro.password}
                  name="password"
                  onChange={handlerPassword}
                  className="text-black font-bold text-center border-gray-600 border-2 "
                />
              </section>

              <section className="flex justify-center items-center m-1 ">
                <input
                  type="password"
                  placeholder="Repita la contraseña"
                  value={registro.confirmarPassword}
                  name="confirmarPassword"
                  onChange={handlerConfirmarPassword}
                  className="text-black font-bold text-center border-gray-600 border-2 "
                />
              </section>

              <section className="flex justify-center items-center m-1">
                <button
                  type="submit"
                  className="border-2 p-1 rounded-xl text-green-500 bg-slate-500 border-slate-300 font-bold uppercase"
                >
                  enviar
                </button>
              </section>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default RegistroUsuarios;
