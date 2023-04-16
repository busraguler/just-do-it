import * as actionTypes from "./actionTypes";

export const setNotification = (type, message) => ({
  type: actionTypes.SET_NOTIFICATION,
  payload: { type, message },
});

export const resetNotification = () => ({
  type: actionTypes.RESET_NOTIFICATION,
});
