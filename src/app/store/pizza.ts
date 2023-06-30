import { Store } from "vuex";
import { CreatePizza, DeletePizza, IPizza, UpdatePizza } from "../api/PizzaApi";

export const actionPizza = {
    deletePizza({ commit }: Store, id: number) {
        DeletePizza(id).then((e) => commit("setPizza", e));
    },
    createPizza({ commit }: Store, data: IPizza) {
        CreatePizza(data).then((e) => commit("setPizza", e));
    },
    updatePizza({ commit }: Store, data: IPizza) {
        UpdatePizza(data).then((e) => commit("setPizza", e));
    },
};
