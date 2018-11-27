import {
    FETCH_TOPICS_FAILED,
    FETCH_TOPICS_SUCCESS,
    ADD_TOPIC_FAILED,
    ADD_TOPIC_SUCCESS,
    ADDING_TOPIC,
    FETCH_TOPIC_SUCCESS,
    FETCH_TOPIC_FAILED,
    REMOVE_TOPIC_FAILED,
    REMOVE_TOPIC_SUCCESS,
    REMOVING_TOPIC
} from "../actions/types";
const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TOPICS_SUCCESS:
        // var newArr = _.sortBy(arr, 'count', function (n) {
        //     return Math.sin(n);
        // });

        // sort by topics.arguments.length
        return [...state, ...action.payload.data];

      case FETCH_TOPICS_FAILED:
        return state;

      case ADDING_TOPIC:
        return state;

      case ADD_TOPIC_SUCCESS:
        console.log(action.payload);
        return [...state, action.payload.data.user];

      case ADD_TOPIC_FAILED:
        return state;

      case FETCH_TOPIC_SUCCESS:
        return [action.payload.topic];

      case FETCH_TOPIC_FAILED:
        return state;

      case REMOVING_TOPIC:
        return state;

      case REMOVE_TOPIC_SUCCESS:
        console.log(action.payload);
        return [];

      case REMOVE_TOPIC_FAILED:
        return state;

      default:
        return state;
    }
}
