import { actionTypes } from "../action";
import { initState, actionGetUser } from "../types";

const initialState: initState = {
  getUser: null,
};
export const userReducer = (
  state: initState = initialState,
  action: actionGetUser
) => {
  switch (action.type) {
    case actionTypes.getUser:
      return {
        ...state,
        getUser: action.payload,
      };
    default:
      return state;
  }
};
