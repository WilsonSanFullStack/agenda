import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from '../redux/actions/initState'

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const removeCookie = (name: string) => {
    document.cookie = `${name}=; Max-Age=0; path=/;`;
  };
  const handleLogout = () => {
    dispatch(logout()); // Restablece el estado en Redux
    removeCookie("token"); // Elimina la cookie del token
    navigate("/"); // Redirige al usuario a la página de inicio o login
  };
  return (
    <nav className="px-10 fixed top-0 min-w-full">
      <ul className="flex list-none justify-between items-center h-9 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out ">
        <Link to={"/home"}>
          <li className="inline-block items-center">
            <button className="uppercase border-2  active:border-2 hover:bg-green-600 active:bg-blue-500 hover:border-2 border-slate-950 rounded-lg px-1">
              home
            </button>
          </li>
        </Link>
        <Link to={"/home"}>
          <li className="inline-block items-center">
            <button className="uppercase border-2  active:border-2 hover:bg-green-600 active:bg-blue-500  hover:border-2 border-slate-950 rounded-lg px-1">
              estafadores
            </button>
          </li>
        </Link>
        <Link to={"/home"}>
          <li className="inline-block items-center">
            <button className="uppercase border-2  active:border-2 hover:bg-green-600 active:bg-blue-500  hover:border-2 border-slate-950 rounded-lg px-1">
              clientes
            </button>
          </li>
        </Link>
        <Link to={"/home"}>
          <li className="inline-block items-center">
            <button
              onClick={handleLogout}
              className="uppercase border-2  active:border-2 hover:bg-green-600 active:bg-blue-500  hover:border-2 border-slate-950 rounded-lg px-1"
            >
              cerrar
            </button>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
