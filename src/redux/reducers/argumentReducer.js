import {
    FETCH_ARGUMENTS_FAILED,
    FETCH_ARGUMENTS_SUCCESS,
    ADD_ARGUMENT_FAILED,
    ADD_ARGUMENT_SUCCESS,
    REMOVE_ARGUMENT_FAILED,
    REMOVE_ARGUMENT_SUCCESS
} from "../actions/types";

    
const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {

        case FETCH_ARGUMENTS_SUCCESS:
            return action.payload;

        case FETCH_ARGUMENTS_FAILED:
            return state;

        case ADD_ARGUMENT_SUCCESS:
            return [...state, action.payload];

        case ADD_ARGUMENT_FAILED:
            return state;

        case REMOVE_ARGUMENT_SUCCESS:
            return state.map(argument => argument.id !== action.payload.id);

        case REMOVE_ARGUMENT_FAILED:
            return state;

        default:
            return state;
    }
}
