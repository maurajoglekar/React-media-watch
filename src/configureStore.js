import { createStore, applyMiddleware } from "redux";
import counterReducer from "./redux/counter/counterReducer";
import watchCounter from "./redux/counter/counterSagas";
import createSagaMiddleware from "redux-saga";

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    counterReducer, /* preloadedState, */
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watchCounter);

export default store;