import { loadData, saveData } from "../../utils/LocalStorage";

import { authContraint } from "./actionType";
const token = loadData("token") || null;
const initalState = {
  isAuth: token !== null,
  token: token
};

export const reducer = (state = initalState, action) => {
  //console.log(action.type, action.payload);
  switch (action.type) {
    case authContraint.LOGIN_SUCCESS: {
      saveData("token", action.payload.token);
      return {
        ...state,
        isAuth: true,
        token: action.payload.token
      };
    }

    default:
      return state;
  }
};
