// src/store/rootReducer.ts
import { combineReducers } from 'redux';
import { clientesReducer } from './reducerClientes';
import { userReducer } from './reducerUser';
import { initReducer } from './reducerInit';
import { errorReducer } from './reducerError';
import { logoutReducer } from './reducerLogout';



const appReducer = combineReducers({
  clientes: clientesReducer,
  user: userReducer,
  token: initReducer,
  errorAxios: errorReducer,
  logout: logoutReducer
});

const rootReducer = (state: ReturnType<typeof appReducer> | undefined, action: any) => {
  if (action.type === 'logout') {
    state = undefined;
  }
  return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
