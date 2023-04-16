import React from "react";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { editTodo, deleteTodo } from "../../../../redux/modules/todo/actions";

const ListItem = ({ id, task, isCompleted }) => {
  const dispatch = useDispatch();

  const onChangeTodoStatu = () => {
    dispatch(editTodo(id));
  };

  const onDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="itemContainer">
      <div>
        <Checkbox checked={isCompleted} onChange={onChangeTodoStatu} />
        <p style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
          {task}
        </p>
      </div>
      <DeleteIcon className="delete" onClick={onDeleteTodo} />
    </div>
  );
};

export default ListItem;
