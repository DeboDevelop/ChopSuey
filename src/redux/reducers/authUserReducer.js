import { AUTH_USERS_FAILURE, AUTH_USERS_REQUEST, AUTH_USERS_SUCCESS } from "../types/authUserTypes";

const initialState = {
    loading: false,
    user: "",
    error: "",
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case AUTH_USERS_SUCCESS:
            return {
                loading: false,
                user: action.payload.data.jwt,
                error: "",
            };
        case AUTH_USERS_FAILURE:
            return {
                loading: false,
                user: "",
                error: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;
