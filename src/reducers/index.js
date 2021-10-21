import checkoutReducer from "./checkout";
import { combineReducers } from "redux";


const allReducers = combineReducers({
    checkout : checkoutReducer
})

export default allReducers;