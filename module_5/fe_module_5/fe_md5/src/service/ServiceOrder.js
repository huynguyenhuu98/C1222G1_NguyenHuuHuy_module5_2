import axios from "axios";

export const findAllOrder = async () =>{
    const result = await axios.get(`http://localhost:8080/order`)
    return result.data
}
export const findAllProduct = async () =>{
    const result = await axios.get(`http://localhost:8080/order/product`)
    return result.data
}
export const createOrder = async (order) =>{
    const result = await axios.post(`http://localhost:8080/order`,order)
    return result.data
}
export const remove = async (id) =>{
    const result = await axios.delete(`http://localhost:8080/order/delete/${id}`)
    return result.data
}