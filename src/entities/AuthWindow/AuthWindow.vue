<template>
    <MyButton color="lightOrange" @click="showWindow" type="medium">Вход</MyButton>
    <Modal v-if="show" @close="showWindow">
        <form class="FormAuth">
            <h1>Вход на сайт</h1>
            <label>
                Логин
                <br />
                <MyInput v-model.trim="email" placeholder="Логин" />
            </label>
            <label>
                Пароль
                <br />
                <MyInput
                    v-model.trim="password"
                    placeholder="Пароль"
                    type="password"
                />
            </label>
            <MyButton
                color="orange"
                type="large"
                @click.stop.prevent="login"
                :disabled="email.length && password.length ? false : true"
                >Вход</MyButton
            >
            <p class="Link" @click="showReg">Зарегистрироваться</p>
            <p class="Error">{{ error }}</p>
        </form>
    </Modal>
    <RegistrationWindow @close="showReg" v-if="regWindow"></RegistrationWindow>
</template>

<script lang="ts">
import MyButton from "../../shared/MyButton/MyButton.vue";
import Modal from "../../shared/Modal/Modal.vue";
import MyInput from "../../shared/MyInput/MyInput.vue";
import { LoginApi } from "../../app/api/AuthApi";
import RegistrationWindow from "../RegistrationWindow/RegistrationWindow.vue";
import jwtDecode from "jwt-decode";

export default {
    name: "AuthWindow",
    components: { MyButton, Modal, MyInput, RegistrationWindow },
    data() {
        return {
            show: false,
            regWindow: false,
            email: "",
            password: "",
            error: ""
        };
    },
    methods: {
        showWindow() {
            this.show = !this.show;
        },
        async login() {
            LoginApi({ email: this.email, password: this.password })
                .then(()=>{
                    this.showWindow()
                    this.$store.commit('setToken')
                    localStorage.setItem('basketId', jwtDecode(localStorage.getItem("access_token") || "").basketId)
                })
                .catch(e=>this.error ="⚠ " + e?.response?.data?.message || "Ошибка")
        },
        showReg() {
            this.show = !this.show;
            this.regWindow = !this.regWindow
        }
    }
};
</script>

<style lang="scss">
.AuthWindow {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
}

.FormAuth {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    h1 {
        position: relative;
        top: -20px;
    }
    height: 100%;
    input {
        width: 100%;
    }
    button {
        width: 100%;
    }
    .Link{
        text-align: center;
        cursor: pointer;
        font-weight: 700;
        transition: 0.3s;
        &:hover{
            color: orangered;
        }
    }
    .Error{
        color: red;
        text-align: center;
    }
}
</style>
