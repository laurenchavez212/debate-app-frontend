import {
    FETCH_VOTES_SUCCESS,
    FETCH_VOTES_FAILED,
    ADD_VOTE_SUCCESS,
    ADD_VOTE_FAILED,
    DELETE_VOTE_SUCCESS
} from "../actions/types";

let initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
      case FETCH_VOTES_SUCCESS:
          console.log(action.payload)
          return action.payload.arguments;
      
      case FETCH_VOTES_FAILED:
          return state;
      
      case ADD_VOTE_SUCCESS:
          return [...state, action.payload];
      
      case ADD_VOTE_FAILED:
          return state;
      
      case DELETE_VOTE_SUCCESS:
      console.log(action.payload);
          return state.filter(vote => vote.id !== action.payload);

    default:
      return state;
  }
};
