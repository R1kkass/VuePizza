<template>
    <div
        class="w-[90%] xl:w-[1280px] h-[80vh] gap-5 m-auto grid grid-cols-2 grid-rows-2"
    >
        <div class="pb-10 col-start-1 relative col-end-1 overflow-hidden">
            <div class="flex items-center text-white ps-2 pe-2 justify-between h-[60px] bg-gray-400">
                <h2>Товары</h2>
                <AddPizzaModal/>
            </div>
            <div class="pb-[25px] h-[300px] overflow-y-scroll">
                <AdminProductCard :pizza="product" v-for="product in $store.state.pizza">
                    {{ product._id }}
                </AdminProductCard>
            </div>
        </div>
        <div class="col-start-2 col-end-2">321</div>
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

const store = useStore();

onMounted(async () => {
    const pizza = await axios.get(`${domen}/pizza/getall`);
    store.commit("setPizza", pizza.data.pizzas);
});
</script>
