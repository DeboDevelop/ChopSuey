import axios from "axios";
import { AUTH_USERS_FAILURE, AUTH_USERS_REQUEST, AUTH_USERS_SUCCESS } from "../types/authUserTypes";

export const loginUser = (userEmail, password) => {
    return dispatch => {
        dispatch(loginUsersRequest());
        axios
            .post("http://localhost:1337/auth/local", {
                identifier: userEmail,
                password: password,
            })
            .then(user => dispatch(loginUsersSuccess(user)))
            .catch(err => dispatch(loginUsersFailure(err)));
    };
};

export const loginUsersRequest = () => {
    return {
        type: AUTH_USERS_REQUEST,
    };
};

export const loginUsersSuccess = user => {
    return {
        type: AUTH_USERS_SUCCESS,
        payload: user,
    };
};

export const loginUsersFailure = error => {
    return {
        type: AUTH_USERS_FAILURE,
        payload: error,
    };
};
