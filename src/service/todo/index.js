import axios from "axios";
import { setTodoList, setLoading } from "../../redux/modules/todo/actions";
import store from "../../redux/store";

export const getTodoList = () => {
  store.dispatch(setLoading(true));
  axios.get("http://localhost:3000/mocks/todoList.json").then((res) => {
    const todoListLS = JSON.parse(localStorage.getItem("todoList"));
    store.dispatch(setTodoList(todoListLS ? todoListLS : res.data));
    store.dispatch(setLoading(false));
  });
};

// Create edit ve delete sanki apiye gidiyormuş gibi yazılmıştır.
export const createTodo = async (data) => {
  //axios.post("http://localhost:3000/todoList/", data);
  return data;
};

export const editTodo = async (data) => {
  //axios.put("http://localhost:3000/todoList/", data);
  return data;
};

export const deleteTodo = (id) => {
  //axios.delete("http://localhost:3000/todoList/" + id);
};
