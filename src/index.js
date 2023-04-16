import React from "react";
import ReactDOM from "react-dom/client";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
    >
      <App />
    </SnackbarProvider>
  </Provider>
);
