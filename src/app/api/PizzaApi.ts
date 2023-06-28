import axios from "axios"
import { domen } from "../const/domen"

export interface IPizza {
    name: string,
    price: string,
    weight: string,
    image: string,
    ingredients: string,
    category: string
}

export const DeletePizza = async (id: number) => {
    const pizza = await axios.delete(`${domen}/pizza/delete?_id=${id}`)
    return pizza.data
}

export const CreatePizza = async (data: IPizza) => {
    const pizza = await axios.post(`${domen}/pizza/create`, data, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
    })
    return pizza.data
}