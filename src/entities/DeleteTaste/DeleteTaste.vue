<template>
    <MyButton @click="deleteTaste(id)" type="mini" class="p-1" color="orange">
        <p class="text-xs">Удалить</p>
    </MyButton>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import MyButton from "@/shared/MyButton/MyButton.vue";

defineProps({
    id: {
        type: String,
        required: true,
    },
});

const store = useStore();
function deleteTaste(id: string) {
    store.dispatch("deleteTaste", id);
}
</script>
