import Form from "../../../components/atoms/Form";
import { useDispatch } from "react-redux";
import { createTodo } from "../../../redux/modules/todo/actions";
import { formData } from "./constants";

function TodoForm() {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    values.id = new Date().getTime();
    values.isCompleted = false;
    dispatch(createTodo(values));
  };

  return <Form formData={formData} submitText="Add" onSave={onSubmit} />;
}

export default TodoForm;
