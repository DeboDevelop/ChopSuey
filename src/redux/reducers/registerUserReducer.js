import { REGISTER_USERS_FAILURE, REGISTER_USERS_REQUEST, REGISTER_USERS_SUCCESS } from "../types/registerUserTypes";

const initialState = {
    loading: false,
    user: {},
    error: "",
};

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case REGISTER_USERS_SUCCESS:
            return {
                loading: false,
                user: action.payload.data.jwt,
                error: "",
            };
        case REGISTER_USERS_FAILURE:
            return {
                loading: false,
                user: {},
                error: action.payload,
            };
        default:
            return state;
    }
};

export default registerReducer;
