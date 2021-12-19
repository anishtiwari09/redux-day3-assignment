export const authContraint = {
  LOGIN_SUCCESS: "LOGIN_SUCCESS"
};
//action creator

export const loginSuccess = (token) => ({
  type: authContraint.LOGIN_SUCCESS,
  payload: {
    token: token
  }
});
