import { combineReducers } from "redux";
import userReducer from "./userReducer";
import topicReducer from "./topicReducer";
import argumentReducer from "./argumentReducer";

export default combineReducers({
  userReducer,
  topics: topicReducer,
  arguments: argumentReducer
});
