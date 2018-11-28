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
            // var newArr = _.sortBy(arr, 'count', function (n) {
            //     return Math.sin(n);
            // });

            // sort by arguments.votes.length
            return action.payload.arguments;

        case FETCH_ARGUMENTS_FAILED:
            return state;

        case ADD_ARGUMENT_SUCCESS:
            return [...state, action.payload.data.user];

        case ADD_ARGUMENT_FAILED:
            return state;

        case REMOVE_ARGUMENT_SUCCESS:
            return state.filter(item => item.id !== action.payload);

        case REMOVE_ARGUMENT_FAILED:
            return state;

        default:
            return state;
    }
}
