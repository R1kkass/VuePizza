import { Store } from "vuex";
import { IAddTaste } from "../api/BasketApi";
import { CreateTaste, DeleteTaste, GetTaste, ITaste } from "../api/TasteApi";
import { DeletePizza } from "../api/PizzaApi";

export const actionTaste = {
    getTaste({ commit }: Store, e: IAddTaste) {
        GetTaste().then((e) => {
            commit("setTaste", e);
        });
    },
    deleteTaste({ commit }: Store, id: String) {
        DeleteTaste(id).then((e) => commit("setTaste", e));
    },
    createTaste({ commit }: Store, data: ITaste) {
        CreateTaste(data).then((e) => commit("setTaste", e));
    },
};
