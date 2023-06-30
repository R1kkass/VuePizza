<template>
    <div
        class="w-[90%] xl:grid-cols-2 xl:w-[1280px] min-h-[80vh] gap-5 m-auto grid grid-cols-1 xl:grid-rows-2 grid-rows-3"
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
                >
                    {{ product._id }}
                </AdminProductCard>
            </div>
        </div>
        <div
            class="border border-gray-500 xl:col-start-2 xl:col-end-2 xl:row-start-1 row-start-3 col-start-1"
        >
            <div
                class="flex items-center text-white ps-2 pe-2 justify-between h-[60px] bg-gray-500"
            >
                <h2>Заказы</h2>
            </div>
            <div class="h-[300px] overflow-y-scroll">
                <AdminOrderCard
                    :order="product"
                    v-for="product in $store.state.admOrder"
                >
                    {{ product._id }}
                </AdminOrderCard>
            </div>
        </div>
        <div class="row-start-2 row-end-2 grid-flow-col col-start-1 col-span-2">
            321
        </div>
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

const store = useStore();

onMounted(async () => {
    const pizza = await axios.get(`${domen}/pizza/getall`);
    store.commit("setPizza", pizza.data.pizzas);
    store.dispatch("getAllAdminOrder");

});
</script>
