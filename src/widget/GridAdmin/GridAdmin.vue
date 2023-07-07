<template>
  <div :class="` border border-gray-500 row-start-${row} row-end-${row} grid-flow-col col-start-${col} col-span-1` ">
        <div class=" h-[60px] bg-gray-500 text-white flex items-center ps-2 pe-2">
            <h2>{{name}}</h2>
            <div class="ml-auto">
                <slot name="add"/>
            </div>
        </div>
        <div class="overflow-y-scroll h-[300px] overflow-hidden">
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

<style lang="scss">

</style>