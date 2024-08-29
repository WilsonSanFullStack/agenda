import axios from "axios";
import { Dispatch } from "redux";
import { actionTypes } from "../action";
import { Login } from "../types";

const BASE = import.meta.env.VITE_REACT_APP_BASE;
const URL = import.meta.env.VITE_REACT_APP_URL;
const AUTH = import.meta.env.VITE_REACT_APP_AUTH;


export const postInit = (login: Login) => {
  console.log(login)
  return async (dispatch: Dispatch) => {
    try {
      const endpoint = `${URL}/${BASE}/${AUTH}`;
      const {data} = await axios.post(endpoint, login);
      dispatch({
        type: actionTypes.postInit,
        payload: data,
      })
    } catch (error) {
      console.log(error)
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