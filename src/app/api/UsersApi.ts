import axios from "axios";
import { domen } from "../const/domen";

export interface IAdminUser {
    id: String;
    role: String;
}

class UserApi {
    async getAllUser() {
        const user = await axios.get(`${domen}/adminuser/get`, {
            headers: {
                Authorization: `bearer ${localStorage.getItem("access_token")}`,
            },
        });
        return user.data;
    }

    async updateUser(data) {
        const user = await axios.put(
            `${domen}/adminuser/update?id=${data.id}`,
            data,
            {
                headers: {
                    Authorization: `bearer ${localStorage.getItem(
                        "access_token"
                    )}`,
                },
            }
        );
        return user.data;
    }
}

export const userApi = new UserApi();
