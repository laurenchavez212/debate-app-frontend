import { combineReducers } from "redux";
import userReducer from "./userReducer";
import topicReducer from "./topicReducer";
import argumentReducer from "./argumentReducer";
import voteReducer from "./voteReducer";

export default combineReducers({
  current_user: userReducer,
  topics: topicReducer,
  arguments: argumentReducer,
  votes: voteReducer

});
