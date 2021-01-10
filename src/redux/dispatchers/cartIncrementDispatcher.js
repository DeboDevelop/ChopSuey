import { CART_INCREMENT_FAILURE, CART_INCREMENT_REQUEST, CART_INCREMENT_SUCCESS } from "../types/cartTypes";

export const incrementCart = newItem => {
    return dispatch => {
        dispatch(cartIncrementRequest());
        let reduxState = localStorage.getItem("reduxState") ? JSON.parse(localStorage.getItem("reduxState")) : null;
        if (reduxState === null || reduxState.auth.user === "") {
            dispatch(cartIncrementfailure("User is not signed in."));
        } else {
            let allItem = reduxState.cart.items ? reduxState.cart.items : {};
            if (allItem.hasOwnProperty(newItem.id)) {
                if (allItem[newItem.id].quantity >= newItem.quantity) {
                    dispatch(cartIncrementfailure("No more in Stock"));
                } else {
                    allItem[newItem.id].quantity += 1;
                    dispatch(cartIncrementSuccess(allItem));
                }
            } else {
                dispatch(cartIncrementfailure("Item not in cart"));
            }
        }
    };
};

export const cartIncrementRequest = () => {
    return {
        type: CART_INCREMENT_REQUEST,
    };
};

export const cartIncrementSuccess = items => {
    return {
        type: CART_INCREMENT_SUCCESS,
        payload: items,
    };
};

export const cartIncrementfailure = error => {
    return {
        type: CART_INCREMENT_FAILURE,
        payload: error,
    };
};
