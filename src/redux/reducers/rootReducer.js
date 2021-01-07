import { combineReducers } from "redux";
import loginReducer from "./loginUserReducer";

const rootReducer = combineReducers({
    login: loginReducer,
});

export default rootReducer;
