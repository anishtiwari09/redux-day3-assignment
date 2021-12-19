import { authContraint } from "./actionType";

export const loginSuccess = (token) => ({
  type: authContraint.LOGIN_SUCCESS,
  payload: {
    token: token
  }
});

export const loginRequest = () => ({
  type: authContraint.LOGIN_REQUEST,
  payload: {
    isLoading: true
  }
});

export const loginFailure = () => ({
  type: authContraint.LOGIN_FAILURE,
  payload: {
    isError: true
  }
});
