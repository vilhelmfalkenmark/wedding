import React from "react";
import ReactDOM from "react-dom";
import Root from "./layout/Root";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import store from "./store";
import { onInsertCssHandler } from "hocs/WithStyles";
import WithCssContext from "hocs/WithCssContext";

ReactDOM.render(
  <WithCssContext onInsertCss={onInsertCssHandler}>
    <Provider store={store}>
      <Root />
    </Provider>
  </WithCssContext>,
  document.getElementById("root")
);
registerServiceWorker();
