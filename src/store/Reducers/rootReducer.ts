import { combineReducers } from "redux";
import { ProductReducer } from "./ProductReducer";

const rootReducer = (history: History) => ProductReducer;

export default rootReducer;