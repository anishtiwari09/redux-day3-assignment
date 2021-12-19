import { appContraint } from "./actionType";

export const addTodo = ({ status, title, id }) => ({
  type: appContraint.ADD_TODO,
  payload: {
    status,
    title,
    id
  }
});

export const removeTodo = (id) => ({
  type: appContraint.REMOVE_TODO,
  payload: {
    id: id
  }
});
export const toggleTodoStatus = (id) => ({
  type: appContraint.TOGGLE_TODO_STATUS,
  payload: {
    id: id
  }
});

export const getTodosRequest = () => {
  return {
    type: appContraint.GET_TODO_REQUEST,
    payload: {
      isLoading: true
    }
  };
};
export const getTodosSuccess = (todos) => {
  return {
    type: appContraint.GET_TODO_SUCCESS,
    payload: {
      todos: todos
    }
  };
};

export const getTodosFailure = () => {
  return {
    type: appContraint.GET_TODO_FAILURE,
    payload: {
      isError: true
    }
  };
};
