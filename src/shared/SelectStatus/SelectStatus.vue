<template>
    <MySelect @setValue="setValue" :defaultValue="default" :listValue="list" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useStore } from "vuex";
import MySelect from "../MySelect/MySelect.vue";

const props = defineProps({
    default: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
});


const store = useStore();

function setValue(name) {
    if(props.default !== name.value){
        updateStatus(props.id, name.value)
    }
}

function updateStatus(id: String, status: String) {
    store.dispatch("updateAdminOrder", { id, status });
}

const list = ref([
    {
        name: "В пути",
    },
    {
        name: "В работе",
    },
    {
        name: "В обработке",
    },
]);
</script>
