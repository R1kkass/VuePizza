<template>
    <input v-if="myvalue!==undefined" @input="updateInput" :value="myvalue" class="MyInput" />
    <input v-else @input="updateInput" class="MyInput" />
</template>

<script lang="ts">
export default {
    name: "MyInput",
    props: {
        modelValue: String,
        myvalue: String,
    },
    methods: {
        updateInput(event: Event) {
            this.$emit(
                "update:modelValue",
                (event.target as HTMLInputElement).value
            );
        },
    },
};
</script>

<style lang="scss">
.MyInput {
    outline: 1px solid rgb(186, 186, 186);
    height: 45px;
    padding: 5px;
    border: none;
    font-size: 20px;
    border-radius: 10px;
    &:focus {
        outline: 1px solid orangered;
    }
}
</style>
