<template>
    <header class="Header">
        <div class="Header__first">
            <div class="Logo">
                <Logo />
                <p>BoboPizza</p>
            </div>
            <div class="Delivery">
                <h4>Доставка пиццы за 30 минут</h4>
            </div>
            <div class="Login">
                <AuthWindow v-if="!$store.state.token"></AuthWindow>
                <template v-else>
                    <MyButton @click="exit" type="large" color="lightOrange"
                        >Выход</MyButton
                    >
                    <router-link class="Header__avatar" to="person">
                        <Avatar />
                        <p>Кабинет</p>
                    </router-link>
                    <router-link
                        v-if="nameAndCountry === 'ADMIN'"
                        class="Header__avatar"
                        to="admin"
                    >
                        <Avatar />
                        <p>Админ</p>
                    </router-link>
                </template>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import MyButton from "../../shared/MyButton/MyButton.vue";
import AuthWindow from "../AuthWindow/AuthWindow.vue";
import { LogoutApi } from "../../app/api/AuthApi";
import Avatar from "../../assets/Avatar.vue";
import { useStore } from "vuex";
import jwtDecode from "jwt-decode";
import { computed } from "vue";
import Logo from "@/assets/Logo.vue";

const store = useStore();

async function exit() {
    await LogoutApi();
    localStorage.setItem("basketId", String(Date.now()));
    store.commit("setToken");
}

const nameAndCountry = computed<string>(
    () => jwtDecode(localStorage.getItem("access_token") || "").role
);
</script>

<style lang="scss">
.Header {
    .Login {
        display: flex;
        align-items: center;
        gap: 30px;
    }
    width: 1280px;
    margin: 0 auto;
    @media screen and (max-width: 1300px) {
        width: 100%;
    }
    &__avatar {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 13px;
        transition: all 0.3s ease;
        svg {
            transition: 0.3s;
        }
        &:hover {
            color: orangered;
            fill: orangered;
            transition: 0.3s;
            path {
                fill: orangered;
            }
            svg {
                transform: translate(0px, -5px);
                fill: orangered;
            }
        }
    }
    &__first {
        display: flex;
        height: 60px;
        align-items: center;
        justify-content: space-between;
        padding-inline: 10px;
        .Logo{
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 700;
            font-size: 1.7em;
        }
    }

    &__second {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: sticky;
        top: 0;
        .Info {
            display: flex;
            gap: 10px;
            div {
                font-size: 14px;
            }
        }
    }
}
</style>
