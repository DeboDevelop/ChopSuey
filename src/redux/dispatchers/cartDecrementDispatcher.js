import { CART_DECREMENT_FAILURE, CART_DECREMENT_REQUEST, CART_DECREMENT_SUCCESS } from "../types/cartTypes";

export const decrementCart = newItem => {
    return dispatch => {
        dispatch(cartDecrementRequest());
        let reduxState = localStorage.getItem("reduxState") ? JSON.parse(localStorage.getItem("reduxState")) : null;
        if (reduxState === null || reduxState.auth.user === "") {
            dispatch(cartDecrementfailure("User is not signed in."));
        } else {
            let allItem = reduxState.cart.items ? reduxState.cart.items : {};
            if (allItem.hasOwnProperty(newItem.id)) {
                console.log("All item" + JSON.stringify(allItem[newItem.id]));
                console.log("New item" + JSON.stringify(newItem));
                if (allItem[newItem.id].quantity === 1) {
                    delete allItem[newItem.id];
                    dispatch(cartDecrementSuccess(allItem));
                } else {
                    allItem[newItem.id].quantity -= 1;
                    dispatch(cartDecrementSuccess(allItem));
                }
            } else {
                dispatch(cartDecrementfailure("Item not in cart"));
            }
        }
    };
};

export const cartDecrementRequest = () => {
    return {
        type: CART_DECREMENT_REQUEST,
    };
};

export const cartDecrementSuccess = items => {
    return {
        type: CART_DECREMENT_SUCCESS,
        payload: items,
    };
};

export const cartDecrementfailure = error => {
    return {
        type: CART_DECREMENT_FAILURE,
        payload: error,
    };
};
