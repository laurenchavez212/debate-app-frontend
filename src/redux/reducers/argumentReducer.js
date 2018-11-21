import {
    FETCH_ARGUMENTS_FAILED,
    FETCH_ARGUMENTS_SUCCESS,
    ADD_ARGUMENT_FAILED,
    ADD_ARGUMENT_SUCCESS,
    ADDING_ARGUMENT,
    FETCHING_ARGUMENTS,
    REMOVE_ARGUMENT_FAILED,
    REMOVE_ARGUMENT_SUCCESS,
    REMOVING_ARGUMENT
} from "../actions/types";
    
const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_ARGUMENTS:
            return state;

        case FETCH_ARGUMENTS_SUCCESS:
            return action.payload;

        case FETCH_ARGUMENTS_FAILED:
            return state;

        case ADDING_ARGUMENT:
            return state;

        case ADD_ARGUMENT_SUCCESS:
            return [...state, action.payload];

        case ADD_ARGUMENT_FAILED:
            return state;

        case REMOVING_ARGUMENT:
            return state;

        case REMOVE_ARGUMENT_SUCCESS:
            return state.map(argument => argument.id !== action.payload.id);

        case REMOVE_ARGUMENT_FAILED:
            return state;

        default:
            return state;
    }
}