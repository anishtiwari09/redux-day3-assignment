import axios from "axios";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  getTodosFailure,
  getTodosRequest,
  getTodosSuccess
} from "../redux/app/action";

function TodoList({ status, id, title, handleDelete, handleToggle }) {
  return (
    <div
      style={{
        display: "flex",
        padding: "1rem",
        gap: "2rem",
        justifyContent: "center"
      }}
    >
      <div>{title}</div>
      <div>{`${status}`}</div>
      <button onClick={() => handleToggle(id)}>Toggle</button>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
}

export default function TodoItem({ handleDelete, handleToggle }) {
  const { todos, isLoading, isError } = useSelector(
    (state) => state.app,
    shallowEqual
  );
  const dispatch = useDispatch();
  const getTodos = () => {
    dispatch(getTodosRequest());
    return fetch("https://thawing-oasis-54179.herokuapp.com/posts")
      .then((res) => res.json())
      .then((res) => {
        const successAction = getTodosSuccess(res);
        dispatch(successAction);
      })
      .catch((err) => {
        const failureAction = getTodosFailure();
        dispatch(failureAction);
      });
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div style={{ margin: "2rem" }}>
      {isLoading && <h3>Loading...</h3>}
      {isError && <h3>Something went wrong</h3>}
      {todos.map((item) => (
        <TodoList
          key={item.id}
          {...item}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
}
