import axios from "axios";
import { AUTH_USERS_FAILURE, AUTH_USERS_REQUEST, AUTH_USERS_SUCCESS } from "../types/authUserTypes";

export const registerUser = (username, userEmail, password) => {
    return dispatch => {
        dispatch(registerUsersRequest());
        axios
            .post("http://localhost:1337/auth/local/register", {
                username: username,
                email: userEmail,
                password: password,
            })
            .then(user => {
                axios
                    .post(
                        "http://localhost:1337/carts",
                        {
                            Item_list: "{}",
                            user_token: user.data.jwt,
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${user.data.jwt}`,
                            },
                        }
                    )
                    .then(() => dispatch(registerUsersSuccess(user)))
                    .catch(err => dispatch(registerUsersFailure(err)));
            })
            .catch(err => dispatch(registerUsersFailure(err)));
    };
};

export const registerUsersRequest = () => {
    return {
        type: AUTH_USERS_REQUEST,
    };
};

export const registerUsersSuccess = user => {
    return {
        type: AUTH_USERS_SUCCESS,
        payload: user,
    };
};

export const registerUsersFailure = error => {
    return {
        type: AUTH_USERS_FAILURE,
        payload: error,
    };
};
