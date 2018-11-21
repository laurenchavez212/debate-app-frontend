import axios from "../../axios";
import {
    FETCH_TOPICS_SUCCESS,
    FETCH_TOPICS_FAILED,
    ADDING_TOPIC,
    ADD_TOPIC_SUCCESS,
    ADD_TOPIC_FAILED,
    REMOVING_TOPIC,
    REMOVE_TOPIC_SUCCESS,
    REMOVE_TOPIC_FAILED
} from "./types";

export const getTopics = () => dispatch => {
        axios
            .get('/v1/topics') 
            .then(result =>
                dispatch({
                    type: FETCH_TOPICS_SUCCESS,
                    payload: result.data
                })
            )
            .catch(err =>
                dispatch({
                    type: FETCH_TOPICS_FAILED,
                    payload: err
                })
            );
};

export const addTopic = () => dispatch => {
    dispatch({
        type: ADDING_TOPIC
    });

    axios
      .post('/v1/topics')
      .then(result =>
        dispatch({
          type: ADD_TOPIC_SUCCESS,
          payload: result.data
        })
      )
      .catch(err => dispatch({ type: ADD_TOPIC_FAILED, payload: err }));
};

export const removeTopic = () => dispatch => {
    dispatch({
        type: REMOVING_TOPIC
    });

    axios
      .delete('/v1/topics')
      .then(result =>
        dispatch({
          type: REMOVE_TOPIC_SUCCESS,
          payload: result.data
        })
      )
      .catch(err => dispatch({ type: REMOVE_TOPIC_FAILED, payload: err }));
};

