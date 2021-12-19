import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/auth/action";

function Login() {
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(loginSuccess(Date.now()));
  };
  return (
    <div>
      <h3>login</h3>
      <button onClick={handleAdd}>Please click on this login</button>
    </div>
  );
}
export { Login };
