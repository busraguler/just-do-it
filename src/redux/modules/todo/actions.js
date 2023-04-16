import * as actionTypes from "./actionTypes";

export const setTodoList = (data) => ({
  type: actionTypes.SET_TODO_LİST,
  payload: data,
});

export const createTodo = (data) => ({
  type: actionTypes.CREATE_TODO,
  payload: data,
});

export const deleteTodo = (id) => ({
  type: actionTypes.DELETE_TODO,
  payload: id,
});

export const editTodo = (id) => ({
  type: actionTypes.EDIT_TODO,
  payload: id,
});

export const setLoading = (data) => ({
  type: actionTypes.SET_LOADING,
  payload: data,
});
