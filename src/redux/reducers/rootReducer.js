import { combineReducers } from "redux";
import userReducer from "./userReducer";
import topicReducer from "./topicReducer";
import argumentReducer from "./argumentReducer";
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  userReducer,
  topics: topicReducer,
  arguments: argumentReducer,
  form: formReducer
});
