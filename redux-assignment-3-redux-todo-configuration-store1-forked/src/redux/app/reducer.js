import { loadData, saveData } from "../../utils/LocalStorage";
import { appContraint } from "./actionType";

const initalState = {
  todos: [],
  isLoading: false,
  isError: false
};

export const reducer = (state = initalState, action) => {
  //console.log(action.type, action.payload);
  switch (action.type) {
    case appContraint.GET_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case appContraint.GET_TODO_SUCCESS: {
      return {
        ...state,
        todos: action.payload.todos,
        isLoading: false,
        isError: false
      };
    }
    case appContraint.GET_TODO_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false
      };
    }
    case appContraint.ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    }
    case appContraint.REMOVE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload.id)
      };
    }
    case appContraint.TOGGLE_TODO_STATUS: {
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.id
            ? { ...item, status: !item.status }
            : item
        )
      };
    }
    default:
      return state;
  }
};
