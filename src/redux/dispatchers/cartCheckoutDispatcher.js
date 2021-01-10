import { CART_CHECKOUT } from "../types/cartTypes";

export const checkoutCart = () => {
    return dispatch => {
        dispatch(cartCheckoutRequest());
    };
};

export const cartCheckoutRequest = () => {
    return {
        type: CART_CHECKOUT,
    };
};
