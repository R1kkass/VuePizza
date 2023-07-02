<template>
  <div :class="`border h-[40vh] border-gray-500 row-start-${row} row-end-${row} grid-flow-col col-start-${col} col-span-1` ">
        <div class="h-[60px] bg-gray-500 text-white flex items-center ps-2 pe-2">
            <h2>{{name}}</h2>
        </div>
        <div>
            <slot/>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    name: String,
    row: String || Number,
    col: String || Number
})
</script>

<style>

</style>