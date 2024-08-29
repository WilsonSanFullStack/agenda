import axios from "axios";
import { Dispatch } from "redux";
import { actionTypes } from "../action";
import { User } from "../types";

const BASE = import.meta.env.VITE_REACT_APP_BASE;
const URL = import.meta.env.VITE_REACT_APP_URL;

export const postUser = (user: User) => {
  return async (dispatch: Dispatch) => {
    try {
      const endpoint = `${URL}/${BASE}/user`;
      const {data} = await axios.post(endpoint, user);
      console.log(endpoint)
      console.log(user)
      dispatch({
        type: actionTypes.postUser,
        payload: data,
      })
    } catch (error) {
      console.log(error)
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
      const endpoint = `${URL}/${BASE}/user`;
      const {data} = await axios.get(endpoint);
      dispatch({
        type: actionTypes.getUser,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
