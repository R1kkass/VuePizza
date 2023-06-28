import { GetAllOrderApi } from "../api/OrderApi";
import { Store } from "vuex";

export const mutationOrder = {
    getOrder({ commit }: Store) {
        GetAllOrderApi().then((e) => {
            commit("setOrder", e);
        });
    },
};
