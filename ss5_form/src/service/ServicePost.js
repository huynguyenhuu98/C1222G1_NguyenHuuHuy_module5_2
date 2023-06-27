import axios from "axios";

export const findPost = async () => {
    const result = await axios.get('http://localhost:8080/posts')
    return result.data
}
export const remove = async (id) => {
    const result = await axios.delete(`http://localhost:8080/posts/${id}`)
    return result.data
}
export const findById = async (id) => {
    const result = await axios.get(`http://localhost:8080/posts/${id}`)
    return result.data
}
export const addPost = async (posts) => {
    const result = await axios.post(`http://localhost:8080/posts`,posts)
    return result.data
}
export const updatePost = async (id,posts) => {
    const result = await axios.put(`http://localhost:8080/posts/${id}`,{...posts})
    return result.data
}