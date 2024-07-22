import axios from "axios";

const base_url = "http://localhost:8080/api";

export const getAllTrunkInfo = () => {
    return axios.get(base_url + "/getAllTrunkInfo").then(response => response.data)
}

export const getTrunkInfoById = (id) => {
    return axios.get(base_url + "/getTruck/" + id).then(response => response.data)
}

export const getDriverInfoById = (id) => {
    return axios.get(base_url + "/getDriver/" + id).then(response => response.data)
}

export const getAllRecipeDetails = () =>{
    return axios.get(base_url + "/getAllRecipeDetails").then(response => response.data)
}