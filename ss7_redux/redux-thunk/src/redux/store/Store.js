import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "../reducer/Root";

const initialStore = {}
const middleWare = [thunk]

export const store = createStore(
    rootReducer,
    initialStore,
    applyMiddleware(...middleWare)
)