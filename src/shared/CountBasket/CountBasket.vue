<template>
    <div class="CountBasket" v-if="count">
        <h1>{{ count }} товара на {{ price }} ₽</h1>
    </div>
</template>

<script lang="ts">

export default {
    name: "CountBasket",
    props: {
        count: Number,
        price: Number
    },
    
};
</script>

<style lang="scss">
.CountBasket {
    padding: 20px;
    h1{
        font-size: 20px;
    }
}
</style>
