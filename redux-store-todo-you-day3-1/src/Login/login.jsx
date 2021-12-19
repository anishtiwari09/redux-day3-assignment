import axios from "axios";
import { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { loginFailure, loginRequest, loginSuccess } from "../redux/auth/action";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { isLoading, isError } = useSelector(
    (state) => ({
      isLoading: state.auth.isLoading,
      isError: state.auth.isError
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  const userAuthenticate = () => {
    const payload = {
      email: email,
      password: pass
    };
    const config = {
      url: "https://reqres.in/api/login",
      method: "post",
      data: payload
    };
    dispatch(loginRequest());
    return axios(config)
      .then((res) => {
        //return res;
        //console.log(res.data.token);
        dispatch(loginSuccess(res.data.token));
      })
      .catch((res) => {
        dispatch(loginFailure());
      });
  };
  const handleLogin = async () => {
    try {
      const result = userAuthenticate();
    } catch (err) {}
  };
  const showResult = async (result) => {
    console.log(result);
  };
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
      }}
    >
      <h1>login</h1>
      {isLoading && <h3>Loading ...</h3>}
      {isError && <h3>email or password is wrong</h3>}
      <div>
        <input
          type="email"
          value={email}
          placeholder="someone@email.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="password"
        />
      </div>
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
export { Login };
