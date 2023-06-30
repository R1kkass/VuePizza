import { Store } from "vuex";
import { AdminOrderAll, IOrder } from "../api/OrderApi";

export const actionAdminORder = {
    getAllAdminOrder({ commit }: Store, order: IOrder[]) {
        AdminOrderAll().then((e) => commit("setAdmOrder", e));
    },
};
