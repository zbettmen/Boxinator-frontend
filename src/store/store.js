import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import allReducers from "./reducers";

const enchancers = compose(
    applyMiddleware(thunk)
)


const store = createStore(allReducers, enchancers)

export default store