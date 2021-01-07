import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const loggerMiddleware = createLogger();

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware)));
