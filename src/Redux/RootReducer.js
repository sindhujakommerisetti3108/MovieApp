import { combineReducers } from "redux";
import MovieReducer from "./MovieReducer";

const RootReducer=combineReducers({
    data:MovieReducer
});
export default RootReducer;