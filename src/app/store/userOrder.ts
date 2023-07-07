import { Store } from "vuex";
import { IAdminUser, userApi } from "../api/UsersApi";

export const actionUsers = {
    getUsers({ commit }: Store) {
        
        userApi.getAllUser().then((e) => commit("setUsers", e));
    },

    updateUser({ commit }: Store, data: IAdminUser) {
        userApi.updateUser(data).then((e) => commit("setUsers", e));
    },
};
