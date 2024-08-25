import { useSelector } from "react-redux";
import { getUser } from "../redux/actions/user";
import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { RootState } from "../redux/reducer/index";
import { Dispatch } from "redux";
import { StoreState, User } from "../redux/types";

const Home = () => {
  const dispatch = useDispatch<Dispatch<any>>();

  const user: User = useSelector((state: StoreState) => state.user.getUser);
console.log(user)
const milliseconds = (user?.fechaRegistro?._seconds * 1000) + (user?.fechaRegistro?._nanoseconds / 1000000);
const date = new Date(milliseconds)
  return (
    <div className="text-center items-center p-2 min-h-screen ">
      <h1 className="text-slate-50 text-3xl">hola soy el home</h1>
      <h1 className="text-red-500">hola soy el home</h1>

      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui id neque
          consequuntur cum odit suscipit ducimus deserunt nostrum unde, ab quas
          voluptates et cupiditate delectus. Omnis eos nulla iste commodi?
        </p>
      </div>
      <button
        onClick={() => {
          dispatch(getUser());
        }}
        className="border-white border-2 p-1"
      >
        get user
      </button>
      <div>
        <p className=" text-white">{user?.id}</p>
        <p className="text-white">{user?.nombre}</p>
        <p className="text-white">{user?.userName}</p>
        <p className=" text-white">{user?.edad}</p>
        <p className=" text-white">{user?.nacionalidad}</p>
        <p className=" text-white">{user?.pagina}</p>
        <section className=" text-white">{user?.comentatios.map((a, x) => { return <p className="text-blue-500" key={x+1} >{a}</p>})}</section>
        <section className=" text-white">{user?.fetiches.map((a, x) => { return <p className="text-green-500" key={x+1}>{a}</p>})}</section>
        <section className=" text-white">{user?.gustos.map((a, x) => { return <p className="text-yellow-500" key={x+1}>{a}</p>})}</section>
        <p className=" text-white">{user?.creador}</p>
        {date && <p className=" text-white">{date?.toLocaleString()} UTC-5</p>}

      </div>
    </div>
  );
};

export default Home;
