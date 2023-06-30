import axios from "axios";
import { domen } from "../const/domen";
import { IDataBasket } from "./BasketApi";

export interface IData<T> {
    data: T;
}

export interface IOrder {
    count?: Number;
    phone: String;
    street: String;
    house: String;
    city: String;
    name: String;
    price?: number;
    product?: IDataBasket[];
    date?: number;
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
