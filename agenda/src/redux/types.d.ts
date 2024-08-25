import { actionTypes } from "./action";
import { Action } from "redux";

export interface User {
  nombre: string;
  id: number;
  edad: number;
  userName: string;
  nacionalidad: string;
  gustos: string[];
  fetiches: string[];
  comentatios: string[];
  creador: string;
  fechaRegistro: {
    _seconds: number
    _nanoseconds: number
  };
  pagina: string;
}
export type getUser = string

export interface actionGetUser extends Action {
  type: typeof actionTypes.getUser;
  payload: User;
}
export interface initState {
  getUser: null | User;
}

export interface StoreState {
  user: typeof getUser
}