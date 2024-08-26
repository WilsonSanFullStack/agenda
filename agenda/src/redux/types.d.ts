import { actionTypes } from "./action";
import { Action } from "redux";
import rootReducer from "./reducer";
export interface Clientes {
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
    _seconds: number;
    _nanoseconds: number;
  };
  pagina: string;
}
// types for action get clientes
export type getClientes = string;

export interface actionGetClientes extends Action {
  type: typeof actionTypes.getClientes;
  payload: Clientes;
}
export interface initStateC {
  getClientes: Clientes | null;
}
// types for action get user
export interface User {
  admin: boolean;
  apellido: string;
  email: string;
  id?: number;
  nombre: string;
  password: string;
  registro?: {
    _seconds: number;
    _nanoseconds: number;
  };
  userName: string;
}

export type getUser = string;
export interface actionGetUser extends Action {
  type: typeof actionTypes.getUser | actionTypes.postUser;
  payload: User;
}
export interface initStateU {
  getUser: User | null;
  postUser: string | null;
}

export type PostUser = string;

// types for storeState 
export interface StoreState {
  clientes: initStateC;
  user: initStateU
}

