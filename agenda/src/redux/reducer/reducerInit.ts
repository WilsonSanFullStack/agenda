import { actionTypes } from "../action";
import { initStateI,  actionPostInit, actionDeleteToken } from "../types";

const initialState: initStateI = {
  token: null,
  user: null
};
export const initReducer = (
  state: initStateI = initialState,
  action: actionPostInit | actionDeleteToken
) => {
  switch (action.type) {
    case actionTypes.postInit:
      return {
        ...state,
        token: action.payload.message,
        user: action.payload.user
      }

    case actionTypes.deleteToken:
      return {
        ...state,
        token: action.payload,
      };

    default:
      return state;
  }
};
