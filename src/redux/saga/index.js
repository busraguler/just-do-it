import { all, fork } from "redux-saga/effects";
import todoSaga from "../modules/todo/saga";

export default function* rootSaga() {
  yield all([...todoSaga].map(fork));
}
