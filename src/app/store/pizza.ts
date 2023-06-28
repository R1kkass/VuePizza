import { Store } from "vuex";
import { CreatePizza, DeletePizza, IPizza } from "../api/PizzaApi";

export const actionPizza = {
    deletePizza({commit}: Store, id: number) {
        DeletePizza(id).then(e=>commit('setPizza', e))
    },
    createPizza({commit}: Store, data: IPizza) {
        CreatePizza(data).then(e=>commit('setPizza', e))
    }
}