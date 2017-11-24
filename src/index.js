import React from "react";
import ReactDOM from "react-dom";
// import "./styles/css/stylesheet.css";
// import "./styles/scss/stylesheet.scss";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import store from "./store";
require("./styles/scss/stylesheet.scss");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
