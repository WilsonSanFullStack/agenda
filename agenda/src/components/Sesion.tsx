import { useState, ChangeEvent, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteToken, postInit } from "../redux/actions/iniciar";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducer/index";

const Sesion = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<Dispatch<any>>();
  const token = useSelector((state: RootState) => state.token.token);
  const errorAxios = useSelector(
    (state: RootState) => state.errorAxios.errorAxios
  );

  const [init, setInit] = useState(false);
  const [login, setLogin] = useState({
    userName: "",
    password: "",
  });
  const [showForm, setShowForm] = useState(true);

  const handlerUserName = (event: ChangeEvent<HTMLInputElement>) => {
    setLogin({
      ...login,
      userName: event.target.value,
    });
  };

  const handlerPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setLogin({
      ...login,
      password: event.target.value,
    });
  };

  const handlerSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setShowForm(false);
    setInit(true);
    dispatch(postInit(login));
  };
  useEffect(() => {
    setTimeout(() => {
      if (token) {
        if (token === "Credenciales Correctas") {
          dispatch(deleteToken());
          return navigate("/home");
        }
      } else if (errorAxios?.message && errorAxios.status) {
        setShowForm(true);
        setInit(false);
      }
    }, 1000);
  }, [token, init, errorAxios]);
  return (
    <div className="min-h-screen flex justify-center items-center">
      {showForm && (
        <div className="">
          <section>
            {errorAxios && (
              <div className="text-center bg-gray-900 m-2 p-2 rounded-lg">
                <section className="flex">
                  <p className="mx-2">status</p>
                  <p className="text-red-500">{errorAxios.status}</p>
                </section>
                <section className="flex">
                  <p className="mx-2">mensaje</p>
                  <p className="text-red-500 font-bold">{errorAxios.message}</p>
                </section>
                <section  className="text-red-600 font-bold">
                  {errorAxios.message === "Token no proporcionado"  ? 'Esta intentando usar la pagina sin autorizacion': ''}
                </section>
                <section className="text-green-500 font-bold">
                  {errorAxios.message === "Token ha expirado" ? 'Inicie sesion nuevamente por favor': ''}
                </section>
              </div>
            )}
          </section>
          <form onSubmit={handlerSubmit}>
            <div>
              <section className="flex justify-center items-center m-1 ">
                <input
                  type="text"
                  placeholder="escriba su Nick"
                  value={login.userName}
                  name="nombre"
                  onChange={handlerUserName}
                  className="text-black font-bold text-center border-gray-600 border-2 "
                />
              </section>

              <section className="flex justify-center items-center m-1 ">
                <input
                  type="password"
                  placeholder="escriba su password"
                  value={login.password}
                  name="nombre"
                  onChange={handlerPassword}
                  className="text-black font-bold text-center border-gray-600 border-2 "
                />
              </section>

              <section className="flex justify-center items-center">
                <section className=" flex justify-center items-center m-1 font-bold uppercase">
                  <button
                    type="submit"
                    className="border-2 rounded-xl p-1 active:bg-stone-500 hover:bg-blue-500 focus:bg-red-500"
                  >
                    Iniciar Sesion
                  </button>
                </section>
                <section className=" m-1 font-bold uppercase">
                  <Link to={"/"}>
                    <button className="border-2 rounded-xl p-1 active:bg-stone-500 hover:bg-blue-500 focus:bg-red-500">
                      Cancelar
                    </button>
                  </Link>
                </section>
              </section>
            </div>
          </form>
        </div>
      )}
      {init && (
        <div>
          <h1>iniciando sesion</h1>
        </div>
      )}
    </div>
  );
};

export default Sesion;
