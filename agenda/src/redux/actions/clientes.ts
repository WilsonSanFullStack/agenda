import axios from "axios";
import { Dispatch } from "redux";
import { actionTypes } from "../action";
import { handleError } from "../../assets/errorHelper";

const BASE = import.meta.env.VITE_REACT_APP_BASE;
const URL = import.meta.env.VITE_REACT_APP_URL;
const AUTH = import.meta.env.VITE_REACT_APP_AUTH;


export const getClientes = () => {
  return async (dispatch: Dispatch) => {
    try {
      const endpoint = `${URL}/${BASE}/${AUTH}/clientes`;
      const {data} = await axios.get(endpoint, { withCredentials: true });
      dispatch({
        type: actionTypes.getClientes,
        payload: data,
      });
    } catch (error: unknown) {
      const errores = handleError(error);
      dispatch({
        type: actionTypes.error,
        payload: errores,
      })
    }
  };
};
