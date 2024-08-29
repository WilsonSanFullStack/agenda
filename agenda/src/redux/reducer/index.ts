// src/store/rootReducer.ts
import { combineReducers } from 'redux';
import { clientesReducer } from './reducerClientes';
import { userReducer } from './reducerUser';
import { initReducer } from './reducerInit';

const appReducer = combineReducers({
  clientes: clientesReducer,
  user: userReducer,
  token: initReducer
});

const rootReducer = (state: ReturnType<typeof appReducer> | undefined, action: any) => {
  if (action.type === 'LOGOUT') {
    state = undefined;  // Esto reinicia el estado de Redux
  }
  return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
