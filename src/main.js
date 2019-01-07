import React from "react";
import { render } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./redux";
let store = createStore(reducer);

const unsubscribe = store.subscribe(() => console.log(123, store.getState()));
// unsubscribe();
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
