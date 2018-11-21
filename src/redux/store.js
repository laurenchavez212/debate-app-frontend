import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers/rootReducer";
let middleware = [thunk, logger];

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(...middleware));
}
