import { CART_ADD_FAILURE, CART_ADD_REQUEST, CART_ADD_SUCCESS } from "../types/cartTypes";

export const addCart = newItem => {
    return dispatch => {
        dispatch(cartAddRequest());
        let reduxState = localStorage.getItem("reduxState") ? JSON.parse(localStorage.getItem("reduxState")) : null;
        if (reduxState === null || reduxState.auth.user === "") {
            dispatch(cartAddfailure("User is not signed in."));
        } else {
            let allItem = reduxState.cart.items ? reduxState.cart.items : {};
            if (allItem.hasOwnProperty(newItem.id)) {
                dispatch(cartAddfailure("Item Already in the cart"));
            } else {
                allItem[newItem.id] = { Name: newItem.Name, price: newItem.price, quantity: 1 };
                dispatch(cartAddSuccess(allItem));
            }
        }
    };
};

export const cartAddRequest = () => {
    return {
        type: CART_ADD_REQUEST,
    };
};

export const cartAddSuccess = items => {
    return {
        type: CART_ADD_SUCCESS,
        payload: items,
    };
};

export const cartAddfailure = error => {
    return {
        type: CART_ADD_FAILURE,
        payload: error,
    };
};
