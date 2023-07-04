import axios from 'axios';

export const findAll = async () => {
    try {
        return (await axios.get(`http://localhost:8080/facilities?_sort=title&_order=desc`)).data
    } catch (error) {
        console.log(error)
    }
}
export const findTypeFacilities = async () => {
    try {
        return (await axios.get(`http://localhost:8080/typeFacilities`)).data
    } catch (error) {
        console.log(error)
    }
}

export const save = async (facility) => {
    try {
        await axios.post('http://localhost:8080/facilities', facility)
    } catch (error) {

    }
}
export const findById = async (id) => {
    try {
        return (await axios.get(`http://localhost:8080/facilities/${id}`)).data
    } catch (error) {
        console.log(error)
    }
}
export const update = async (id, facility) => {
    try {
        await axios.put(`http://localhost:8080/facilities/${id}`, facility)
    } catch (error) {
        console.log("errUpdate", error)
    }
}

export const remove = async (id) => {
    try {
        const res = await axios.delete(`http://localhost:8080/facilities/${id}`)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}
export const findByName = async (title,type) => {
    const res = await axios.get(`http://localhost:8080/facilities?title_like=${title}&typeFacilities_like=${type}`)
    return res.data
}
