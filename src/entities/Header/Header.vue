<template>
    <header class="Header">
        <div class="Header__first">
            <div class="Logo"></div>
            <div class="Delivery">
                <h4>Доставка пиццы за 30 минут</h4>
            </div>
            <div class="Login">
                <AuthWindow v-if="!$store.state.token"></AuthWindow>
                <MyButton
                    @click="exit"
                    v-if="$store.state.token"
                    type="large"
                    color="lightOrange"
                    >Выход</MyButton
                >
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import MyButton from "../../shared/MyButton/MyButton.vue";
import AuthWindow from "../AuthWindow/AuthWindow.vue";
import { LogoutApi } from "../../app/api/AuthApi";
export default {
    components: { MyButton, AuthWindow },
    methods: {
        async exit() {
            await LogoutApi();
            localStorage.setItem('basketId', String(Date.now()))
            this.$store.commit("setToken");
        },
    },
};
</script>

<style lang="scss">
.Header {
    width: 1280px;
    margin: 0 auto;
    @media screen and (max-width: 1300px) {
        width: 100%;
    }
    &__first {
        display: flex;
        height: 60px;
        align-items: center;
        justify-content: space-between;
        padding-inline: 10px;
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
