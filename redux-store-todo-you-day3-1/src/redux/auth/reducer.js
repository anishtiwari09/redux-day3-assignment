import { loadData, saveData } from "../../utils/LocalStorage";

import { authContraint } from "./actionType";
const token = loadData("token") || null;
const initalState = {
  isAuth: !!token,
  token: token,
  isLoading: false,
  isError: false
};

export const reducer = (state = initalState, action) => {
  //console.log(action.type, action.payload);
  switch (action.type) {
    case authContraint.LOGIN_SUCCESS: {
      saveData("token", action.payload.token);
      return {
        ...state,
        isAuth: true,
        token: action.payload.token,
        isLoading: false,
        isError: false
      };
    }
    case authContraint.LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case authContraint.LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    }

    default:
      return state;
  }
};
