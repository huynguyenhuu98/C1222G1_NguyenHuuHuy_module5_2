import postService from "../../service/ServicePost";
import {CREATE_POST, DELETE_POST, GET_ALL_POST} from "./Types";


export const getAllPost = () => async (dispatch) => {
    const res = await postService.findAll()
    dispatch({
        type: GET_ALL_POST,
        payload: res.data
    })
}
export const createPost = (post) => async (dispatch) => {
    const res = await postService.save(post)
    dispatch({
        type: CREATE_POST,
        payload: res.data
    })
}
export const deletePost = (id) => async (dispatch) => {
    const res = await postService.deletePost(id)
    dispatch({
        type: DELETE_POST,
        payload: res.data
    })
}