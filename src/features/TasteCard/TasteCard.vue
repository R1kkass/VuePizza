<template>
    <div class="h-[100px] flex border border-gray-200">
        <div class="w-[100px]">
            <img
                class="w-[100px] h-[100px] object-cover items-center"
                :src="taste.image"
            />
        </div>
        <div>
            <p>
                {{ taste.name }}
            </p>
            <p>
                {{ taste.price }}
            </p>
        </div>
        <div class="ml-auto">
            <DeleteTaste :id="taste._id" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { ITaste } from "@/app/api/TasteApi";
import DeleteTaste from "../../entities/DeleteTaste/DeleteTaste.vue";

defineProps({
    taste: Object as PropType<ITaste>,
});
</script>
