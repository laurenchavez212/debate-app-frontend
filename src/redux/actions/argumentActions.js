import axios from "../../axios";
import {
  FETCH_ARGUMENTS_SUCCESS,
  FETCH_ARGUMENTS_FAILED,
  ADDING_ARGUMENT,
  ADD_ARGUMENT_SUCCESS,
  ADD_ARGUMENT_FAILED,
  REMOVING_ARGUMENT,
  REMOVE_ARGUMENT_SUCCESS,
  REMOVE_ARGUMENT_FAILED
} from "./types";

export const getArguments = id => dispatch => {
  // dispatch({
  //   type: FETCHING_ARGUMENTS
  // });
  axios.get(`/v1/topics/${id}`) // Insert EC2 instance or Proxy
    // console.log("fetching arguments", result)
    .then((response) => {
      dispatch({
        type: FETCH_ARGUMENTS_SUCCESS,
        payload: response.data
      })
    })
    .catch(err =>
      dispatch({
        type: FETCH_ARGUMENTS_FAILED,
        payload: err
      })
    );
};

export const addArgument = () => dispatch => {
  dispatch({
    type: ADDING_ARGUMENT
  });

  axios
    .post()
    .then(result =>
      dispatch({
        type: ADD_ARGUMENT_SUCCESS,
        payload: result.data
      })
    )
    .catch(err =>
      dispatch({
        type: ADD_ARGUMENT_FAILED,
        payload: err
      })
    );
};

export const removeArgument = (id) => dispatch => {
  dispatch({
    type: REMOVING_ARGUMENT
  });

  axios
    .delete(`/v1/arguments/${id}`, {
      headers: {
        "X-User-Token": localStorage.getItem("X-User-Token"),
        "X-User-Email": localStorage.getItem("X-User-Email")
      }
    })
    .then(result =>
      dispatch({
        type: REMOVE_ARGUMENT_SUCCESS,
        payload: result.data
      })
    )
    .catch(err => dispatch({ type: REMOVE_ARGUMENT_FAILED, payload: err }));
};


