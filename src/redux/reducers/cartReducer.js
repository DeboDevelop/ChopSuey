import {
    CART_ADD_FAILURE,
    CART_ADD_REQUEST,
    CART_ADD_SUCCESS,
    CART_CHECKOUT,
    CART_DECREMENT_FAILURE,
    CART_DECREMENT_REQUEST,
    CART_DECREMENT_SUCCESS,
    CART_INCREMENT_FAILURE,
    CART_INCREMENT_REQUEST,
    CART_INCREMENT_SUCCESS,
} from "../types/cartTypes";

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
        case CART_DECREMENT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case CART_DECREMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload,
            };
        case CART_DECREMENT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case CART_INCREMENT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case CART_INCREMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload,
            };
        case CART_INCREMENT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case CART_CHECKOUT:
            return {
                loading: false,
                items: {},
                error: "",
            };
        default:
            return state;
    }
};

export default cartReducer;
