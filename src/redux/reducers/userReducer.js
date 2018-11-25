import { LOGIN_USER_SUCCESS, REGISTER_USER } from "../actions/types";

const initialState = localStorage.getItem("token")
  ? { loggedIn: true, token: localStorage.getItem("token") }
  : { loggedIn: false, token: localStorage.getItem("token") };
export default (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return {
                result: action.payload
            };

        case LOGIN_USER_SUCCESS:
            const token = action.payload.data.user.authentication_token;
            localStorage.setItem("token", token);
            console.log("reducer payload", token);
            console.log({...state});
            return { ...state, token: token };
        default:
            return state
    }
}