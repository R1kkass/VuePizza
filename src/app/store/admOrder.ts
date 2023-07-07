import { Store } from "vuex";
import { AdminOrderAll, IOrder, UpdateOrder } from "../api/OrderApi";

type IDataUpdate = {
    id: String;
    status: String;
};

export const actionAdminORder = {
    getAllAdminOrder({ commit }: Store, order: IOrder[]) {
        AdminOrderAll().then((e) => commit("setAdmOrder", e));
    },
    updateAdminOrder({ commit }: Store, data: IDataUpdate) {
        UpdateOrder(data.id, data.status).then((e) => commit("setAdmOrder", e));
    },
};
