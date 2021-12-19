import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as authReducer } from "./auth/reducer";
import { reducer as appReducer } from "./app/reducer";

const rootReducer = combineReducers({ auth: authReducer, app: appReducer });

//applyMiddleware
const loggingMiddleware = (state) => (next) => (action) => {
  console.log(action, "dispatching the action");
  console.log(store.getState(), "store1");
  const value = next(action);

  console.log(value, "value");
  console.log(store.getState(), "store2");
};

export const store = createStore(
  rootReducer,
  applyMiddleware(loggingMiddleware)
  // window.__REDUX_DEVTOOLS_EXTENSION_ || window.__REDUX_DEVTOOLS_EXTENSION__()
);
