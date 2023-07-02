import { Store } from "vuex";
import { IAddTaste } from "../api/BasketApi";
import { GetTaste } from "../api/TasteApi";

export const actionTaste = {
    getTaste({commit}: Store, e: IAddTaste) {
        GetTaste().then(e=>{
            commit('setTaste', e)
        })
    }
}