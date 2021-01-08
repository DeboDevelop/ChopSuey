import { combineReducers } from "redux";
import loginReducer from "./loginUserReducer";
import registerReducer from "./registerUserReducer";

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
});

export default rootReducer;
