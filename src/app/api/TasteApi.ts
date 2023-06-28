import axios from "axios"
import { domen } from "../const/domen"

export const GetTaste = async () => {    
    const taste = await axios.get(`${domen}/taste/gettaste`)
    
    return taste?.data?.taste
}