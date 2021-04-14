import { createStore, compose } from "redux";
import counterReducer from "./redux/counter/counterReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(counterReducer);

export default store;
