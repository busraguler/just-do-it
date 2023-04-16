import { combineReducers } from "redux";
import todoReducer from "../modules/todo/reducer";
import notificationReducer from "../modules/notification/reducer";

const reducers = combineReducers({
  todo: todoReducer,
  notification: notificationReducer,
});
export default reducers;
