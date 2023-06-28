<template>
    <div
        class="flex h-[100px] g-4 w-full overflow-hidden border border-b-gray-300"
    >
        <div class="w-[100px] h-[100px]">
            <img class="h-[100px] object-cover min-w-[100px]" :src="pizza?.image" />
        </div>
        <div class="">
            <p>Название: {{ pizza?.name }}</p>
            <p>Категория: {{ pizza?.category }}</p>
        </div>
        <div class="ml-auto self-center text-sm">
            <MyButton
                @click="$store.dispatch('deletePizza', pizza?._id)"
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

defineProps({
    pizza: Object,
});
</script>
