import React from "react";
import { useSelector } from "react-redux";
import TodoForm from "../sections/Todo/TodoForm";
import TodoList from "../sections/Todo/TodoList";
import Loading from "../components/atoms/Loading";
import PageHeader from "../components/atoms/PageHeader";

const Todo = () => {
  const { isLoading } = useSelector((state) => state.todo);
  return (
    <div className="container">
      <PageHeader title={"Just Do It"} />
      <TodoForm />
      <TodoList />
      {isLoading && <Loading />}
    </div>
  );
};

export default Todo;
