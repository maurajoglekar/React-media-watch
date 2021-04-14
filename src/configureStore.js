import { createStore, compose } from "redux";
import counterReducer from "./redux/counter/counterReducer";

const store = createStore(
    counterReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;