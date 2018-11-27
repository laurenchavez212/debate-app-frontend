import axios from "../../axios";
import {
    FETCH_VOTES_SUCCESS,
    FETCH_VOTES_FAILED,
    ADD_VOTE_SUCCESS,
    ADD_VOTE_FAILED,
    DELETE_VOTE_SUCCESS
} from "./types";

export const fetchVotes = (id) => {
    return dispatch => {
        axios
          .get(`/v1/topics/${id}`)
          .then(response =>
            dispatch({
              type: FETCH_VOTES_SUCCESS,
              payload: response.data
            })
          )
          .catch(err =>
            dispatch({
                  type: FETCH_VOTES_FAILED,
              payload: err
            })
          );
    };
};

export const addVote = (vote) => {
    return dispatch => {
        axios
            .post(`/v1/votes`, vote, {
                headers: {
                    "X-User-Token": localStorage.getItem("X-User-Token"),
                    "X-User-Email": localStorage.getItem("X-User-Email")
                }
            })
          .then(response => {
            dispatch({
              type: ADD_VOTE_SUCCESS,
              payload: response.data
            });
          })
          .catch(err =>
            dispatch({
              type: ADD_VOTE_FAILED,
              payload: err
            })
          );
    }
}

export const deleteVote = (id) => {
    return dispatch => {
        axios
            .delete(`/v1/votes/${id}`)
            .then(response => {
                dispatch({
                  type: DELETE_VOTE_SUCCESS,
                  payload: id
                });
            }
            );
    }
}

