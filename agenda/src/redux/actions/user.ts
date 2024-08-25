import axios from "axios";
import { Dispatch } from "redux";
import { actionTypes } from "../action";
// import { User, PostUser } from "../types";
// type urlBase = string
const BASE = import.meta.env.VITE_REACT_APP_BASE;
const URL = import.meta.env.VITE_REACT_APP_URL;
export const getUser = () => {
  return async (dispatch: Dispatch) => {
    try {
      const endpoint = `${URL}/${BASE}/user`;
      console.log(endpoint)
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
