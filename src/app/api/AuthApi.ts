import axios from "axios";
import { domen } from "../const/domen";

interface ILoginApi {
    email: string;
    password: string;
}

interface IRegistrationApi extends ILoginApi {
    basketId: string;
}

export const LoginApi = async (data: ILoginApi) => {
    const login = await axios(`${domen}/user/login`, {
        method: "POST",
        withCredentials: true,
        data: data,
    });
    localStorage.setItem("access_token", login.data.access_token);
    return login;
};

export const RegistrationApi = async (data: IRegistrationApi) => {
    const login = await axios.post(`${domen}/user/registration`, data);
    localStorage.setItem("access_token", login.data.access_token);
    return login;
};

export const RefreshApi = async () => {
    axios(`${domen}/user/refresh`, {
        method: "GET",
        withCredentials: true,
    })
        .then((e) => localStorage.setItem("access_token", e.data.access_token))
        .catch(() => localStorage.removeItem("access_token"));
    return true;
};

export const LogoutApi = async () => {
    axios(`${domen}/user/logout`, {
        method: "POST",
        withCredentials: true,
    })
    localStorage.removeItem("access_token");
};
