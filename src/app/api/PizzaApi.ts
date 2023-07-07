import axios from "axios";
import { domen } from "../const/domen";

export interface IPizza {
    id?: string;
    name: string;
    price: string;
    weight: string;
    image: string;
    ingredients: string;
    category: string;
    status?: string;
    file?: File;
    _id?: string;
}

export const DeletePizza = async (id: number) => {
    const pizza = await axios.delete(`${domen}/pizza/delete?_id=${id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "multipart/form-data",
        },
    });
    return pizza.data;
};

export const CreatePizza = async (data: IPizza) => {
    const pizza = await axios.post(`${domen}/pizza/create`, formData(data), {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
    });
    return pizza.data;
};

const formData = (data: IPizza) => {
    const formData = new FormData();

    formData.append("file", data?.file || "");
    formData.append("category", data.category);
    formData.append("status", data?.status || "");
    formData.append("ingredients", data.ingredients);
    formData.append("price", data.price);
    formData.append("weight", data.weight);
    formData.append("image", data.image);
    formData.append("name", data.name);
    formData.append("_id", data?.id || "");
    return formData;
};

export const UpdatePizza = async (data: IPizza) => {
    const pizza = await axios.post(`${domen}/pizza/update`, formData(data), {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "multipart/form-data",
        },
    });
    return pizza.data;
};
