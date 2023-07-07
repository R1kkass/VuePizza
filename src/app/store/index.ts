import { createStore, Store } from "vuex";
import {
    DeleteBasketApi,
    GetBasketApi,
    IDataBasket,
    IUpdateBasket,
    UpdateBasketApi,
} from "../api/BasketApi";
import { IOrder } from "../api/OrderApi";
import { mutationOrder } from "./order";
import { actionPizza } from "./pizza";
import { actionAdminORder } from "./admOrder";
import { actionTaste } from "./taste";
import { IAdminUser } from "../api/UsersApi";
import { actionUsers } from "./userOrder";

interface IState {
    show: boolean;
    pizza: IPizza[];
    token: string | null;
    taste: ITaste[];
    basket: IDataBasket[];
    order: IOrder[];
    admOrder: IOrder[];
    users: IAdminUser[]
}

interface IPizza {
    name: string;
    price: string;
}

interface ITaste {
    name: string;
    price: string;
    image: string;
}

export default createStore<IState>({
    state: {
        show: false,
        pizza: [],
        token: localStorage.getItem("access_token"),
        taste: [],
        basket: [],
        order: [],
        admOrder: [],
        users: []
    },
    mutations: {
        switchBasket(state: IState, e: boolean) {
            state.show = e;
        },
        setPizza(state: IState, pizza: IPizza[]) {
            state.pizza = pizza;
        },
        setToken(state: IState) {
            state.token = localStorage.getItem("access_token");
        },
        setTaste(state: IState, taste: ITaste[]) {
            state.taste = taste;
        },
        setBasket(state: IState, basket: IDataBasket[]) {
            state.basket = basket;
        },
        setOrder(state: IState, order: IOrder[]) {
            state.order = order;
        },
        setAdmOrder(state: IState, order: IOrder[]) {
            state.admOrder = order;
        },
        setUsers(state: IState, user: IAdminUser[]) {
            state.users = user
        }
    },
    getters: {
        getPizza(state: IState) {
            return state.pizza;
        },
    },
    actions: {
        showBasket({ commit }: Store, route: any) {
            route.router.push({
                path: route.route.path,
                query: { basket: true },
            });
            commit("switchBasket", true);
        },
        fetchBasket({ commit }: Store) {
            GetBasketApi().then((e) => {
                commit("setBasket", e);
            });
        },
        updateBasket({ commit }: Store, data: IUpdateBasket) {
            UpdateBasketApi(data).then((e) => {
                commit("setBasket", e);
            });
        },
        deleteBasket({ commit }: Store, id: string) {
            DeleteBasketApi(id).then((e) => {
                commit("setBasket", e);
            });
        },
        ...mutationOrder,
        ...actionPizza,
        ...actionAdminORder,
        ...actionTaste,
        ...actionUsers
    },
});
