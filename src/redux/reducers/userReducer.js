import { LOGIN_USER_SUCCESS, REGISTER_USER } from "../actions/types";

const initialState = localStorage.getItem("X-User-Token")
    ? { loggedIn: true, token: localStorage.getItem("X-User-Token") }
    : { loggedIn: false, token: localStorage.getItem("X-User-Token") };
export default (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return {
                result: action.payload
            };

        case LOGIN_USER_SUCCESS:
            const token = action.payload.data.user.authentication_token;
            const email = action.payload.data.user.email;
            localStorage.setItem("X-User-Token", token);
            localStorage.setItem("X-User-Email", email);
            return { ...state, email, token };
        
        default:
            return state
    }
}