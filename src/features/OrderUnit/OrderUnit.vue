<template>
    <div
        @click="query"
        class="overflow-hidden flex items-center gap-5 p-4 bg-slate-50 border transition-all hover:shadow-orange-500/50 border-gray-400 h-fit cursor-pointer hover:border-orange-600 w-100"
    >
        <Order />
        <div>
            <h3>Id заказа: {{ order?._id }}</h3>
            <h3>
                Дата:
                {{
                    `
                    ${time.getDate()}.${time.getMonth()}.${time.getFullYear()}
                    ${
                        time.getUTCHours() - new Date().getTimezoneOffset() / 60
                    }:${time.getMinutes()}`
                }}
            </h3>
            <h3>Статус: {{ order?.status }}</h3>
            <h3>Цена: {{ order?.price }} ₽</h3>
        </div>
    </div>
    <OrderModal
        :products="order.product"
        @close="show = !show"
        v-if="show && $route?.query?.modal"
    />
</template>

<script lang="ts">
import OrderModal from "@/entities/OrderModal/OrderModal.vue";
import { PropType } from "vue";
import { IOrder } from "@/app/api/OrderApi";

export default {
    name: "OrderUnit",
    components: {
        OrderModal,
    },
    props: {
        order: {
            type: Object as PropType<IOrder>,
        },
    },
    data() {
        return {
            time: new Date(Number(this.order?.date)),
            show: false,
        };
    },
    methods: {
        query() {
            this.show = true;
            this.$router.push({ path: "person", query: { modal: true } });
        },
    },
    watch: {
        "$route.query.modal": function () {
            if (!this?.$route?.query?.modal) {
                this.show = false;
            }
        },
    },
};
</script>
