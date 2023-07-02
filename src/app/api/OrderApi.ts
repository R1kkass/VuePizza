import axios from "axios";
import { domen } from "../const/domen";
import { IAddTaste } from "./BasketApi";

export interface IData<T> {
    data: T;
}

export interface IOrder {
    _id?: string;
    count?: Number;
    phone: String;
    street: String;
    house: String;
    city: String;
    name: String;
    price?: number;
    product?: IProduct[]
    date?: number;
    status?: string
}

export  interface IProduct{
    product: {
        _id: string;
        name: string;
        addTaste: IAddTaste[];
        dough: string;
        size: string;
        image: string;
    }
    price: string;
    count: number;
    _id: string    
}

export const AddOrderApi = async (data: IOrder) => {
    data.date = Date.now();
    const order = await axios.post(`${domen}/order/addorder`, data, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
    });
    return order.data;
};

export const GetAllOrderApi = async () => {
    const order: IData<IOrder> = await axios.get(`${domen}/order/getall`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
    });
    return order.data;
};

export const DeleteOrder = async (id: String) => {
    const order: IData<IOrder> = await axios.delete(
        `${domen}/order/getall?_id=${id}`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
        }
    );
    return order.data;
};

export const AdminOrderAll = async () => {
    const order: IData<IOrder> = await axios.get(`${domen}/order/getalladm`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
    });

    return order.data
};

interface IUpdateOrder{
    id: string,
    status: string
}

export const UpdateOrder = async (data: IUpdateOrder) => {
    const order = await axios.put(`${domen}/order/update`, data, {
        headers: {
            Authorization: `bearer ${localStorage.getItem('access_token')}`
        }
    }) 
    return order.data
}