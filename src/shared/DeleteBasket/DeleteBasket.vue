<template>
    <button @click="deleteBasket(id)" class="DeleteBasket">
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                d="M17.3 5.3a1 1 0 111.4 1.4L13.42 12l5.3 5.3a1 1 0 11-1.42 1.4L12 13.42l-5.3 5.3a1 1 0 01-1.4-1.42l5.28-5.3-5.3-5.3A1 1 0 016.7 5.3l5.3 5.28 5.3-5.3z"
                fill="#000"
            ></path>
        </svg>
    </button>
</template>

<script lang="ts">
export default {
    name: "DeleteBasket",
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    methods: {
        deleteBasket(id: String) {
            this.$store.dispatch("deleteBasket", id);
        },
    },
};
</script>

<style lang="scss">
    .DeleteBasket{
        width: 24px;
        height: 24px;
    }
</style>
