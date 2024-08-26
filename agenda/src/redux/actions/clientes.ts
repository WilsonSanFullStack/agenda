import axios from "axios";
import { Dispatch } from "redux";
import { actionTypes } from "../action";

const BASE = import.meta.env.VITE_REACT_APP_BASE;
const URL = import.meta.env.VITE_REACT_APP_URL;
export const getClientes = () => {
  return async (dispatch: Dispatch) => {
    try {
      const endpoint = `${URL}/${BASE}/clientes`;
      const {data} = await axios.get(endpoint);
      dispatch({
        type: actionTypes.getClientes,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
