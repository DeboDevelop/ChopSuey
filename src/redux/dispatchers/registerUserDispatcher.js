import axios from "axios";
import { REGISTER_USERS_FAILURE, REGISTER_USERS_REQUEST, REGISTER_USERS_SUCCESS } from "../types/registerUserTypes";

export const registerUser = (username, userEmail, password) => {
    return dispatch => {
        dispatch(registerUsersRequest());
        axios
            .post("http://localhost:1337/auth/local/register", {
                username: username,
                email: userEmail,
                password: password,
            })
            .then(user => dispatch(registerUsersSuccess(user)))
            .catch(err => dispatch(registerUsersFailure(err)));
    };
};

export const registerUsersRequest = () => {
    return {
        type: REGISTER_USERS_REQUEST,
    };
};

export const registerUsersSuccess = user => {
    return {
        type: REGISTER_USERS_SUCCESS,
        payload: user,
    };
};

export const registerUsersFailure = error => {
    return {
        type: REGISTER_USERS_FAILURE,
        payload: error,
    };
};
