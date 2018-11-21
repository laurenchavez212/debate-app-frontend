import axios from "axios";
import {
  FETCHING_ARGUMENTS,
  FETCH_ARGUMENTS_SUCCESS,
  FETCH_ARGUMENTS_FAILED,
  ADDING_ARGUMENT,
  ADD_ARGUMENT_SUCCESS,
  ADD_ARGUMENT_FAILED,
  REMOVING_ARGUMENT,
  REMOVE_ARGUMENT_SUCCESS,
  REMOVE_ARGUMENT_FAILED
} from "./types";

export const getArguments = () => dispatch => {
    dispatch({
        type: FETCHING_ARGUMENTS
    });

  axios
    .get() // Insert EC2 instance or Proxy
    .then(result =>
      dispatch({
            type: FETCH_ARGUMENTS_SUCCESS,
        payload: result.data
      })
    )
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

export const removeArgument = () => dispatch => {
  dispatch({
      type: REMOVING_ARGUMENT
  });

  axios
    .delete()
    .then(result =>
      dispatch({
        type: REMOVE_ARGUMENT_SUCCESS,
        payload: result.data
      })
    )
    .catch(err =>
      dispatch({
            type: REMOVE_ARGUMENT_FAILED,
        payload: err
      })
    );
};

