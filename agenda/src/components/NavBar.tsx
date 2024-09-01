import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postSession } from "../redux/actions/session";
import { Dispatch } from "redux";
import { RootState } from "../redux/reducer/index";
import { useState } from "react";

const NavBar = () => {
  const dispatch = useDispatch<Dispatch<any>>();
  const navigate = useNavigate();

  const sesion = useSelector((state: RootState) => state.token.user);
  const [showMenu, setShowMenu] = useState(false);
  const [button, setButton] = useState(true)
  const handleMenuToggle = () => {
    setShowMenu(true);
    setButton(false)
  };

  const handleMenuClose = () => {
    setShowMenu(false);
    setButton(true)
  };

  const handleLogout = () => {
    dispatch(postSession());
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
        <Link to={"/clientes"}>
          <li className="inline-block items-center">
            <button className="uppercase border-2  active:border-2 hover:bg-green-600 active:bg-blue-500  hover:border-2 border-slate-950 rounded-lg px-1">
              registro
            </button>
          </li>
        </Link>
        <li>
          {button && (<button onMouseEnter={handleMenuToggle}>
            {sesion?.userName}
          </button>)}
          {showMenu && (<ul>
        <li className="inline-block items-center" onMouseLeave={handleMenuClose}>
          <button
            onClick={handleLogout}
            
            className="uppercase border-2  active:border-2 hover:bg-green-600 active:bg-blue-500  hover:border-2 border-slate-950 rounded-lg px-1"
            >
            cerrar
          </button>
        </li>
            </ul>)}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
