<template>
    <div
        class="flex h-[100px] g-4 w-full overflow-hidden border border-b-gray-300"
    >
        <div class="">
            <p>Название: {{ order?.city }}</p>
            <p>Город: {{ order?.city }}</p>
            <p>Улица: {{ order?.street }}</p>
            <p>
                Дата:
                {{
                    `
                    ${time.getDate()}.${time.getMonth()}.${time.getFullYear()}
                    ${
                        time.getUTCHours() - new Date().getTimezoneOffset() / 60
                    }:${time.getMinutes()}`
                }}
            </p>
        </div>
        <div class="ml-auto self-center text-sm flex flex-col gap-2">
            <div class="flex">
                <MyButton
                    @click="$store.dispatch('deletePizza', order?._id)"
                    class="relative z-10 text-xs h-[30px] ps-2 pe-2 mr-3"
                    type="mini"
                    color="orange"
                    >Изменить</MyButton
                >
                <select class="outline-0 ps-2 pe-5 border border-gray-400 relative right-[25px] ps-3 block">
                    <option>В пути</option>
                    <option>В работе</option>
                </select>
            </div>
            <MyButton @click="show=!show">О заказе</MyButton>
        </div>
        <OrderModal :products="order?.product" v-if="show" @close="show=!show"/>
    </div>
</template>

<script setup lang="ts">
import MyButton from "@/shared/MyButton/MyButton.vue";
import { PropType, ref } from "vue";
import { IOrder } from "@/app/api/OrderApi";
import OrderModal from "@/entities/OrderModal/OrderModal.vue"

const show = ref(false)

const props = defineProps({
    order: {
        type: Object as PropType<IOrder>,
        required: false,
    },
});

const time = new Date(Number(props?.order.date))
</script>
