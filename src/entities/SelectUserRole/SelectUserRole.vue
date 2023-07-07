<template>
    <MySelect @setValue="setValue" :defaultValue="role" :listValue="listValue"> </MySelect>
</template>

<script setup lang="ts">
import MySelect from "@/shared/MySelect/MySelect.vue";
import { ref } from "vue";
import {useStore} from 'vuex'

const props = defineProps({
    role: String,
    id: {
        type: String,
        required: true
    }
})

const listValue = ref([
    {
        name: "ADMIN"
    },
    {
        name: "USER"
    }
])


function setValue(name) {
    if(props.role !== name.value){
        updateRole(props?.id, name.value)
    }
}

const store = useStore()

function updateRole(id: String, name: String) {
    store.dispatch('updateUser', {id, name})
}
</script>
