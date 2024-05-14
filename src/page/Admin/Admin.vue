<template>
    <div
        class="mb-[10px] w-[90%] xl:grid xl:grid-cols-2 xl:w-[1280px] min-h-[80vh] gap-5 m-auto flex flex-col xl:grid-rows-2 grid-rows-3"
    >
        <div
            class="border border-gray-500 col-start-1 relative col-end-1 overflow-hidden"
        >
            <div
                class="flex items-center text-white ps-2 pe-2 justify-between h-[60px] bg-gray-500"
            >
                <h2>Товары</h2>
                <AddPizzaModal />
            </div>
            <div class="h-[300px] overflow-y-scroll">
                <AdminProductCard
                    :pizza="product"
                    v-for="product in $store.state.pizza"
                    v-bind:key="product._id"
                >
                </AdminProductCard>
            </div>
        </div>
        <GridAdmin name="Заказы" col="2" row="1">
            <AdminOrderCard
                :order="product"
                v-for="product in $store.state.admOrder"
                v-bind:key="product._id"
            >
            </AdminOrderCard>
        </GridAdmin>
        <GridAdmin name="Добавить по вкусу" col="1" row="2">
            <TasteCard
                :taste="taste"
                v-for="taste in $store.state.taste"
                @key="taste._id"
            />
            <template v-slot:add><ModalTaste /></template>
        </GridAdmin>
        <GridAdmin name="Пользователи" col="2" row="2">
            <UserAdmCard v-for="user in $store.state.users" :user="user"/>
        </GridAdmin>
    </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted } from "vue";
import { useStore } from "vuex";
import { domen } from "@/app/const/domen";
import AdminProductCard from "@/features/AdminProductCard/AdminProductCard.vue";
import AddPizzaModal from "../../entities/AddPizzaModal/AddPizzaModal.vue";
import AdminOrderCard from "@/features/AdminOrderCard/AdminOrderCard.vue";
import TasteCard from "@/features/TasteCard/TasteCard.vue";
import GridAdmin from "@/widget/GridAdmin/GridAdmin.vue";
import ModalTaste from "@/widget/ModalTaste/ModalTaste.vue";
import UserAdmCard from "@/features/UserAdmCard/UserAdmCard.vue"

const store = useStore();
document.title="Админ"

onMounted(async () => {
    const pizza = await axios.get(`${domen}/pizza/getall`);
    store.commit("setPizza", pizza.data.pizzas);
    store.dispatch("getAllAdminOrder");
    store.dispatch("getTaste");
    store.dispatch("getUsers");
});
</script>

