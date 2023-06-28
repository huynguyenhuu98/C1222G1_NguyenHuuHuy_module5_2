import {combineReducers} from "redux";
import {postReducer} from "./ReducerPost";

export const rootReducer = combineReducers({
    post: postReducer
})