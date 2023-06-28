import request from '../http-common'

const findAll = () => {
    return request.get('/posts')
}
const save = (post) => {
    return request.post('/posts',post)
}
const deletePost = (id) => {
    return request.delete(`/posts/${id}`)
}
const postService={
    findAll,
    save,
    deletePost
}
export default postService;