import { useSelector } from "react-redux";
import ListItem from "./ListItem";
import { getTodoList } from "../../../service/todo";
import { useEffect } from "react";

function TodoList() {
  const { todoList, isLoading } = useSelector((state) => state.todo);

  useEffect(() => {
    getTodoList();
  }, []);

  const isData = todoList && todoList.length > 0;
  return (
    <div className={`listContainer${!isData ? " noData" : ""}`}>
      {isData
        ? todoList.map((item) => {
            return <ListItem key={item?.id} {...item} />;
          })
        : !isLoading && <span>No Data</span>}
    </div>
  );
}

export default TodoList;
