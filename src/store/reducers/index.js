import { combineReducers } from "redux";
import boxReducer from './box'

const allReducers = combineReducers({
    box: boxReducer
})

export default allReducers