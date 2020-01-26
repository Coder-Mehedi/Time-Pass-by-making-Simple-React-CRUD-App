import { combineReducers } from "redux";
import coderReducer from "./coderReducer";
export default combineReducers({ coders: coderReducer });
