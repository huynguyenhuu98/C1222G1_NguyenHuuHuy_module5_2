import axios from 'axios';

export const findAll = async() =>{
    try {
        return (await axios.get(`http://localhost:8080/customer`)).data
    } catch (error) {
        console.log(error)
    }
}

export const findTypeCustomer = async() =>{
    try {
        return (await axios.get(`http://localhost:8080/typeCustomer`)).data
    } catch (error) {
        console.log(error)
    }
}

export const save = async(customer)=>{
    try {
        await axios.post('http://localhost:8080/customer',customer)
    } catch (error) {

    }
}

export const findById = async(id) =>{
    try {
        return (await axios.get(`http://localhost:8080/customer/${id}`)).data
    } catch (error) {
        console.log(error)
    }
}

export const update = async(id,customer)=>{
    try {
        await axios.put(`http://localhost:8080/customer/${id}`,customer)
    } catch (error) {
        console.log(error)
    }
}

export const remove = async(id) =>{
    try {
        const res = await axios.delete(`http://localhost:8080/customer/${id}`)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}
