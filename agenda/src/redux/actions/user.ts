import axios from "axios";
import { Dispatch } from "redux";
import { actionTypes } from "../action";
import { User } from "../types";
import { handleError } from "../../assets/errorHelper";

const BASE = import.meta.env.VITE_REACT_APP_BASE;
const URL = import.meta.env.VITE_REACT_APP_URL;
const AUTH = import.meta.env.VITE_REACT_APP_AUTH;

export const postUser = (user: User) => {
  return async (dispatch: Dispatch) => {
    try {
      const endpoint = `${URL}/${BASE}/user`;
      const {data} = await axios.post(endpoint, user);
      dispatch({
        type: actionTypes.postUser,
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

export const deleteTokens = () => {
  return async (dispatch: Dispatch) => {
      dispatch({
        type: actionTypes.deleteToken,
        payload: null,
      })
  }
}

export const getUser = () => {
  return async (dispatch: Dispatch) => {
    try {
      const endpoint = `${URL}/${BASE}/${AUTH}/user`;
      const {data} = await axios.get(endpoint, { withCredentials: true });
      dispatch({
        type: actionTypes.getUser,
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
