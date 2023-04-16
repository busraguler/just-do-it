import * as actionTypes from "./actionTypes";

const initialState = {
  todoList: [],
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  const list = [...state.todoList];
  switch (action.type) {
    case actionTypes.SET_TODO_LİST:
      return { ...state, todoList: action.payload };
    case actionTypes.CREATE_TODO_SUCCESS:
      list.push(action.payload);
      localStorage.setItem("todoList", JSON.stringify(list));
      return { ...state, todoList: list };
    case actionTypes.DELETE_TODO:
      const newList = list.filter((item) => item.id !== action.payload);
      localStorage.setItem("todoList", JSON.stringify(newList));
      return {
        ...state,
        todoList: newList,
      };
    case actionTypes.EDIT_TODO_SUCCESS:
      list.find((item) => {
        if (item.id === action.payload) {
          item.isCompleted = !item.isCompleted;
        }
      });
      localStorage.setItem("todoList", JSON.stringify(list));
      return {
        ...state,
        todoList: list,
      };
    case actionTypes.SET_LOADING:
      return { ...state, isLoading: !state.isLoading };
    default:
      return state;
  }
};

export default reducer;
