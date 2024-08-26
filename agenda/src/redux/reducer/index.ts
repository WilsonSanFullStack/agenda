// src/store/rootReducer.ts
import { combineReducers } from 'redux';
import { clientesReducer } from './reducerClientes';
import { userReducer } from './reducerUser';




const rootReducer = combineReducers({
  clientes: clientesReducer,
  user: userReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
