import { useDispatch } from "react-redux";
import TodoInput from "./todoInput";
import TodoItem from "./todoList";
import { v4 as uuid } from "uuid";
import { addTodo, removeTodo, toggleTodoStatus } from "../redux/app/action";
export default function Todo() {
  const dispatch = useDispatch();
  const handleAdd = (value) => {
    const todos = {
      id: uuid(),
      title: value,
      status: false
    };
    dispatch(addTodo(todos));
  };
  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };
  const handleToggle = (id) => {
    dispatch(toggleTodoStatus(id));
  };
  return (
    <div>
      <TodoInput onAdd={handleAdd} />
      <TodoItem handleDelete={handleDelete} handleToggle={handleToggle} />
    </div>
  );
}
