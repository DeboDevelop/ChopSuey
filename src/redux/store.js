import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const loggerMiddleware = createLogger();

const persistedState = localStorage.getItem("reduxState") ? JSON.parse(localStorage.getItem("reduxState")) : {};

export const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))
);

store.subscribe(() => {
    localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});
