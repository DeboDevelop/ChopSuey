import { combineReducers } from "redux";
import authReducer from "./authUserReducer";

const rootReducer = combineReducers({
    auth: authReducer,
});

export default rootReducer;
