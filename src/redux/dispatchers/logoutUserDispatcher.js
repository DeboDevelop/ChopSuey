import { AUTH_USERS_LOGOUT } from "../types/authUserTypes";

export const logoutUser = () => {
    return dispatch => {
        dispatch(logoutUserRequest());
    };
};

export const logoutUserRequest = () => {
    return {
        type: AUTH_USERS_LOGOUT,
    };
};
