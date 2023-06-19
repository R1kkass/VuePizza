import { createStore } from "vuex";

interface IState {
    show: boolean
}

export default createStore<IState>({
    state: {
        show: false
    },
    mutations: {
        switchBasket(state: IState) {
            state.show = !state.show
        }
    }
})