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
      dispatch({
        type: actionTypes.postUser,
        payload: data,
      })
    } catch (error) {
      console.log(error)
    }
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
