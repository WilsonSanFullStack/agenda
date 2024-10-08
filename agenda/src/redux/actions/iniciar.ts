import axios from "axios";
import { Dispatch } from "redux";
import { actionTypes } from "../action";
import { Login } from "../types";
import { handleError } from "../../assets/errorHelper";


const BASE = import.meta.env.VITE_REACT_APP_BASE;
const URL = import.meta.env.VITE_REACT_APP_URL;
const AUTH = import.meta.env.VITE_REACT_APP_AUTH;

export const postInit = (login: Login) => {
  return async (dispatch: Dispatch) => {
    try {
      const endpoint = `${URL}/${BASE}/${AUTH}`;
      const {data} = await axios.post(endpoint, login, { withCredentials: true });
      dispatch({
        type: actionTypes.postInit,
        payload: data,
      })
    } catch (error: unknown) {
      const errores = handleError(error);
      dispatch({
        type: actionTypes.error,
        payload: errores,
      })
    }
  }
}

export const deleteToken = () => {
  return async (dispatch: Dispatch) => {
      dispatch({
        type: actionTypes.deleteToken,
        payload: null,
      })
  }
}