<template>
    <div class="Counter">
        <button class="Counter__plus Button" @click="update(pizza?.count - 1)">-</button>
        <div class="Counter__plus">{{ pizza?.count || 1 }}</div>
        <button class="Counter__plus Button" @click="update(pizza?.count + 1)">+</button>
    </div>
</template>

<script lang="ts">
export default {
    name: "Counter",
    props: {
        pizza: Object,
    },
    methods: {
        update(count: number) {
            this.$store.dispatch("updateBasket", {
                count,
                id: this.pizza?._id,
            });
        },
    },
};
</script>

<style lang="scss">
.Counter {
    width: 80px;
    border: 20px;
    font-weight: 1000;
    color: rgb(72, 72, 72);
    display: flex;
    justify-content: space-between;
    &__plus {
        transition: 0.3s;
        font-weight: 1000;


    }
    .Button{
        cursor: pointer;
        font-size: 18px;
        &:hover {
            color: black;
        }
    }
}
</style>
