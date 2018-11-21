import { REGISTER_USER, LOGIN_USER_SUCCESS, LOGIN_ERROR } from "./types";
import axios from "../../axios";

export const userAction = () => dispatch => {
    dispatch({
        type: REGISTER_USER,
        payload: 'result_of_simple_action'
    })
}

export const userLogin = (user) => dispatch => {

    return axios.post('/v1/sessions', user)
        .then((data) => {
            console.log(data);
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: data.data
            })
        }).catch((err) => {
            dispatch({
                type: LOGIN_ERROR,
                payload: err
            })
        })
}