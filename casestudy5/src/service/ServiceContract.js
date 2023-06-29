import axios from 'axios';

export const findAll = async() =>{
    try {
        return (await axios.get(`http://localhost:8080/contract`)).data
    } catch (error) {
        console.log(error)
    }
}

export const save = async(contract)=>{
    try {
        await axios.post('http://localhost:8080/contract',contract)
    } catch (error) {

    }
}
export const findById = async(id) =>{
    try {
        return (await axios.get(`http://localhost:8080/contract/${id}`)).data
    } catch (error) {
        console.log(error)
    }
}
export const update = async(contract)=>{
    try {
        await axios.put(`http://localhost:8080/customer/${contract.id}`,{ ...contract })
    } catch (error) {
        console.log(error)
    }
}

export const remove = async(id) =>{
    try {
        const res = await axios.delete(`http://localhost:8080/contract/${id}`)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}
