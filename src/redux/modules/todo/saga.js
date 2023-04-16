import { call, delay, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import * as services from "../../../service/todo";
import { setLoading } from "./actions";
import { setNotification } from "../notification/actions";

// Burada ki api çağrılarından sonra loadingi görme amaçlı delay verilmiştir.

// CREATE
export function* watchCreateTodo() {
  yield takeLatest(actionTypes.CREATE_TODO, createTodo);
}

function* createTodo(action) {
  try {
    yield put(setLoading(true));
    const data = yield call(() => services.createTodo(action.payload));
    yield delay(500);
    yield put({
      type: actionTypes.CREATE_TODO_SUCCESS,
      payload: data,
    });
    yield put(setNotification("success", "Created Successfully"));
  } catch (error) {
    yield put(setNotification("error", "Something Went Wrong"));
  } finally {
    yield put(setLoading(false));
  }
}

// EDIT
export function* watchEditTodo() {
  yield takeLatest(actionTypes.EDIT_TODO, editTodo);
}

function* editTodo(action) {
  try {
    yield put(setLoading(true));
    const data = yield call(() => services.editTodo(action.payload));
    yield delay(500);
    yield put({
      type: actionTypes.EDIT_TODO_SUCCESS,
      payload: data,
    });
    yield put(setNotification("success", "Updated Successfully"));
  } catch (error) {
    yield put(setNotification("error", "Something Went Wrong"));
  } finally {
    yield put(setLoading(false));
  }
}

// DELETE
export function* watchDeleteTodo() {
  yield takeLatest(actionTypes.DELETE_TODO, deleteTodo);
}

function* deleteTodo({ payload }) {
  try {
    yield put(setLoading(true));
    yield call(() => services.deleteTodo(payload));
    yield delay(500);
    yield put({
      type: actionTypes.DELETE_TODO_SUCCESS,
      payload: payload,
    });
    yield put(setNotification("success", "Deleted Successfully"));
  } catch (error) {
    yield put(setNotification("error", "Something Went Wrong"));
  } finally {
    yield put(setLoading(false));
  }
}

const watchers = [watchCreateTodo, watchEditTodo, watchDeleteTodo];

export default watchers;
