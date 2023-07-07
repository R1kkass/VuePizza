import axios from "axios"
import { domen } from "../const/domen"


export interface ITaste {
    name: String;
    image: String;
    price: String;
    _id: String
}

export const GetTaste = async () => {    
    const taste = await axios.get(`${domen}/taste/gettaste`)
    return taste?.data?.taste
}

export const DeleteTaste = async (id: String) => {
    const taste = await axios.delete(`${domen}/taste/deletetaste?id=${id}`)
    return taste?.data?.taste
}


export const CreateTaste = async (data: ITaste) => {
    const taste = await axios.post(`${domen}/taste/addtaste`, data, {
        headers: {
            Authorization: `bearer ${localStorage.getItem('access_token')}`
        }
    })
    return taste?.data?.taste
}