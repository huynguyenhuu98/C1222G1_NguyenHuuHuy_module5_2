import axios from 'axios';
export const search = async(value,currentPage) =>{
    try {
        return (await axios.get(`http://localhost:8080/facilitiesList?name_like=${value}&_page=${currentPage}&_limit=6&_sort=id&_order=desc`)).data
    } catch (error) {
        console.log(error)
    }
}

export const findAll = async() =>{
    try {
        return (await axios.get(`http://localhost:8080/facilities`)).data
    } catch (error) {
        console.log(error)
    }
}
export const getTotalPages = async() =>{
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
exp
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

export const getFacilitiesType = async() =>{
    try {
        return (await axios.get('http://localhost:8080/facilitiesType')).data
    } catch (error) {
        console.log(error)
    }
}
export const getFacilitiesStandard = async() =>{
    try {
        return (await axios.get('http://localhost:8080/facilityStandard')).data
    } catch (error) {
        console.log(error)
    }
}

export const getFacilitiesRentType = async() =>{
    try {
        return (await axios.get('http://localhost:8080/facilityRentType')).data
    } catch (error) {
        console.log(error)
    }
}

export const getFacilityService = async() =>{
    try {
        return (await axios.get('http://localhost:8080/facilityService')).data
    } catch (error) {
        console.log(error)
    }
}