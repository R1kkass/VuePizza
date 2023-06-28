<template>
    <SectionMy>
        <div class="flex-col gap-10 w-100 flex justify-center">
            <div>
                <h1 class="text-xl font-bold">
                    Личный кабинет:
                    {{ login.email }}
                </h1>
            </div>
            <div>
                <h2 class="text-xl font-bold">История заказов</h2>
            </div>
            <div class="w-100">
                <OrderUnit :order="order" v-for="order in $store.state.order" />
            </div>
        </div>
    </SectionMy>
</template>

<script lang="ts">
import jwtDecode from "jwt-decode";
import SectionMy from "../../shared/Section/Section.vue";
import OrderUnit from "@/features/OrderUnit/OrderUnit.vue";

interface IUser{
    email: String
}

export default {
    name: "Person",
    components: { SectionMy, OrderUnit },
    mounted() {
        this.$store.dispatch("getOrder");
    },
    computed: {
        login():IUser {
            return jwtDecode(localStorage.getItem("access_token") || "");
        },
    },
};
</script>
