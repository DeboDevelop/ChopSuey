import { CART_ADD_FAILURE, CART_ADD_REQUEST, CART_ADD_SUCCESS } from "../types/cartTypes";

const initialState = {
    loading: false,
    items: {},
    error: "",
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_ADD_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case CART_ADD_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload,
            };
        case CART_ADD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default cartReducer;
