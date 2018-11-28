import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import { BrowserRouter} from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/cosmo/bootstrap.min.css";

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
