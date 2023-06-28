import axios from "axios";
import { domen } from "../const/domen";

export interface IAddTaste {
    _id: string;
    name: string;
    price: string;
}

export interface IDataBasket {
    _id?: string;
    price: string | number;
    basketId: string;
    product: {
        _id: string;
        name: string;
        addTaste: IAddTaste[];
        dough: string;
        size: string;
        image: string;
    };
    count: number;
}

export interface IUpdateBasket {
    count: number;
    id: string;
    basketId?: string | null;
}

export const AddBasketApi = async (data: IDataBasket) => {
    const basket = await axios.post(`${domen}/basket/addbasket`, data);
    return basket.data;
};

export const GetBasketApi = async () => {
    const basket = await axios.get(
        `${domen}/basket/getbasket?basketId=${localStorage.getItem("basketId")}`
    );
    return basket.data;
};

export const UpdateBasketApi = async (data: IUpdateBasket) => {
    data.basketId = localStorage.getItem("basketId");
    const basket = await axios.put(`${domen}/basket/updatebasket`, data);
    
    return basket.data;
};

export const DeleteBasketApi = async (id: string) => {
    const basket = await axios.delete(`${domen}/basket/deleteBasket?id=${id}&basketId=${localStorage.getItem('basketId')}`);

    return basket.data;
};
