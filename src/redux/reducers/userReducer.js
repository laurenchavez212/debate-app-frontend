import { LOGIN_USER_SUCCESS, REGISTER_USER } from "../actions/types";

const initialState = { loggedIn: false, token: localStorage.getItem('token') };
export default (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return {
                result: action.payload
            };

        case LOGIN_USER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return { ...state, token: action.payload.token }
        default:
            return state
    }
}