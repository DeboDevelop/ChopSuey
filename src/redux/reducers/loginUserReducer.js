import { LOGIN_USERS_FAILURE, LOGIN_USERS_REQUEST, LOGIN_USERS_SUCCESS } from "../types/loginUserTypes";

const initialState = {
    loading: false,
    user: {},
    error: "",
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case LOGIN_USERS_SUCCESS:
            return {
                loading: false,
                user: action.payload,
                error: "",
            };
        case LOGIN_USERS_FAILURE:
            return {
                loading: false,
                user: {},
                error: action.payload,
            };
        default:
            return state;
    }
};

export default loginReducer;
