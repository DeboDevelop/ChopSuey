import axios from "axios";
import { LOGIN_USERS_FAILURE, LOGIN_USERS_REQUEST, LOGIN_USERS_SUCCESS } from "../types/loginUserTypes";

export const loginUser = () => {
    return dispatch => {
        dispatch(loginUsersRequest());
        axios
            .post("http://localhost:1337/auth/local", {
                identifier: "debajyoti@gmail.com",
                password: "123456",
            })
            .then(user => dispatch(loginUsersSuccess(user)))
            .catch(err => dispatch(loginUsersFailure(err)));
    };
};

export const loginUsersRequest = () => {
    return {
        type: LOGIN_USERS_REQUEST,
    };
};

export const loginUsersSuccess = user => {
    return {
        type: LOGIN_USERS_SUCCESS,
        payload: user,
    };
};

export const loginUsersFailure = error => {
    return {
        type: LOGIN_USERS_FAILURE,
        payload: error,
    };
};
