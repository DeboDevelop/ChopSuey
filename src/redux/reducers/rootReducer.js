import { combineReducers } from "redux";
import authReducer from "./authUserReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
});

export default rootReducer;
