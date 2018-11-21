import {
    FETCH_TOPICS_FAILED,
    FETCH_TOPICS_SUCCESS,
    ADD_TOPIC_FAILED,
    ADD_TOPIC_SUCCESS,
    ADDING_TOPIC,
    REMOVE_TOPIC_FAILED,
    REMOVE_TOPIC_SUCCESS,
    REMOVING_TOPIC
} from "../actions/types";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {

        case FETCH_TOPICS_SUCCESS:
            console.log("reducer here", action.payload)
            return action.payload;

        case FETCH_TOPICS_FAILED:
            return state;

        case ADDING_TOPIC:
            return state;

        case ADD_TOPIC_SUCCESS:
            return [...state, action.payload];

        case ADD_TOPIC_FAILED:
            return state;

        case REMOVING_TOPIC:
            return state;

        case REMOVE_TOPIC_SUCCESS:
            return state.map(topic => topic.id !== action.payload.id);

        case REMOVE_TOPIC_FAILED:
            return state;

        default:
            return state;
    }
}
