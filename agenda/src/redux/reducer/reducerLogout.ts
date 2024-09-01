import { actionTypes } from "../action";
import { initStateL,  actionLogout } from "../types";

const initialState: initStateL = {
  logout: null,
};
export const logoutReducer = (
  state: initStateL = initialState,
  action: actionLogout 
) => {
  switch (action.type) {
    case actionTypes.logout:
      return {
        ...state,
        logout: action.payload,
      };
      

    default:
      return state;
  }
};
