import * as actionTypes from "./actionTypes";

const initialState = {
  open: false,
  type: "sucess",
  message: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_NOTIFICATION:
      return {
        ...state,
        open: true,
        type: action.payload.type,
        message: action.payload.message,
      };
    case actionTypes.RESET_NOTIFICATION:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};

export default reducer;
