<template>
    <div
        class="flex min-h-[100px] g-4 w-full border border-b-gray-300"
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
                <SelectStatus :id="order?._id" :default="order?.status"/>
            </div>
            <MyButton @click="show = !show" color="orange">О заказе</MyButton>
        </div>
        <OrderModal
            :products="order?.product"
            v-if="show"
            @close="show = !show"
        />
    </div>
</template>

<script setup lang="ts">
import MyButton from "@/shared/MyButton/MyButton.vue";
import { PropType, ref } from "vue";
import { IOrder } from "@/app/api/OrderApi";
import OrderModal from "@/entities/OrderModal/OrderModal.vue";
import SelectStatus from "@/shared/SelectStatus/SelectStatus.vue";
const show = ref(false);

const props = defineProps({
    order: {
        type: Object as PropType<IOrder>,
        required: false,
    },
});

const time = new Date(Number(props?.order.date));
</script>
