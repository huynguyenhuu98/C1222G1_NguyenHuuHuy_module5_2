import {CREATE_POST, DELETE_POST, GET_ALL_POST} from "../action/Types";
import * as post from "formik";

const initial = []

 export const postReducer = (posts = initial, action) => {
    const { type, payload} = action
    switch (type) {
        case GET_ALL_POST: return payload
        case CREATE_POST:
            posts.unshift(payload);
            return posts;
            // return [payload,...posts]
        case DELETE_POST: return [...posts]
        default:
            return posts
    }

}