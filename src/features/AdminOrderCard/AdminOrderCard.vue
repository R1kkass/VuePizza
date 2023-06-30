<template>
    <div
        class="flex h-[100px] g-4 w-full overflow-hidden border border-b-gray-300"
    >
        <div class="">
            <p>Название: {{ order?.city }}</p>
            <p>Город: {{ order?.city }}</p>
        </div>
        <div class="ml-auto self-center text-sm flex flex-col gap-2">
            <MyButton
                @click="$store.dispatch('deletePizza', order?._id)"
                class="text-xs h-[30px] ps-2 pe-2 mr-3"
                type="mini"
                color="orange"
                >Удалить</MyButton
            >
        </div>
    </div>
</template>

<script setup lang="ts">
import MyButton from "@/shared/MyButton/MyButton.vue";
import { PropType } from "vue";
import { IOrder } from "@/app/api/OrderApi";

defineProps({
    order: {
        type: Object as PropType<IOrder>,
        required: true,
    },
});
</script>
