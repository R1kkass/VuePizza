<template>
    <Modal>
        <form class="FormAuth">
            <h1>Регистрация</h1>
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
            <label>
                Повторите пароль
                <br />
                <MyInput
                    v-model.trim="passwordRepeat"
                    placeholder="Повторите пароль"
                    type="password"
                />
            </label>
            <MyButton
                color="orange"
                type="large"
                @click.stop.prevent="registration"
                :disabled="
                    email.length && password.length && passwordRepeat.length
                        ? false
                        : true
                "
                >Вход</MyButton
            >
            <p class="Error">{{ error }}</p>
        </form>
    </Modal>
</template>

<script lang="ts">
import MyButton from "../../shared/MyButton/MyButton.vue";
import Modal from "../../shared/Modal/Modal.vue";
import MyInput from "../../shared/MyInput/MyInput.vue";
import { RegistrationApi } from "../../app/api/AuthApi";

export default {
    name: "RegistrationWindow",
    components: { MyButton, Modal, MyInput },
    data() {
        return {
            show: false,
            email: "",
            password: "",
            passwordRepeat: "",
            error: "",
        };
    },
    methods: {
        showWindow() {
            this.show = !this.show;
        },
        async registration() {
            RegistrationApi({
                email: this.email,
                password: this.password,
                basketId: localStorage.getItem("basketId") || "",
            })
                .then(() => this.close())
                .catch(
                    (e) => (this.error = "⚠ " + e?.data?.message || "Ошибка")
                );
        },
        close() {
            this.$emit("close");
        },
    },
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
    padding-inline: 5px;

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
}
</style>
