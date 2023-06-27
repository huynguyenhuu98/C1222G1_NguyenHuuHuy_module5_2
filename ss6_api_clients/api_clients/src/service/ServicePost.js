import axios from "axios";

export const findAll = async() => {
    const value = await axios.get("http://localhost:8080/posts")
    return value.data
}
export const save = async(result) => {
    const value = await axios.post('http://localhost:8080/posts',{result})
    return value.data
}