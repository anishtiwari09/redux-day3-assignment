import { shallowEqual, useSelector } from "react-redux";
import { Login } from "./Login/login";
import "./styles.css";
import Todo from "./todo/todo";

export default function App() {
  const { isAuth, token } = useSelector(
    (state) => ({ isAuth: state.auth.isAuth, token: state.auth.token }),
    shallowEqual
  );
  return isAuth ? (
    <div className="App">
      <h3>User Token: {token}</h3>
      <h1>Todo</h1>
      <Todo />
    </div>
  ) : (
    <Login />
  );
}
