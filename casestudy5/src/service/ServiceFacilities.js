import axios from 'axios';

export const findAll = async() =>{
    try {
        return (await axios.get(`http://localhost:8080/facilities`)).data
    } catch (error) {
        console.log(error)
    }
}

export const save = async(facility)=>{
    try {
        await axios.post('http://localhost:8080/facilities',{ ...facility })
    } catch (error) {

    }
}
export const findById = async(id) =>{
    try {
        return (await axios.get(`http://localhost:8080/facilities/${id}`)).data
    } catch (error) {
        console.log(error)
    }
}
export const update = async(facility)=>{
    console.log("facilityupdate", facility)
    try {
        const res = await axios.put(`http://localhost:8080/facilities/${facility.id}`,{ ...facility })
        console.log("res", res);
    } catch (error) {
        console.log("errUpdate", error)
    }
}

export const remove = async(id) =>{
    try {
        const res = await axios.delete(`http://localhost:8080/facilities/${id}`)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}
