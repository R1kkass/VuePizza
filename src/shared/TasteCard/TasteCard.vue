<template>
    <button
        @click="addTaste(taste)"
        :class="
            tasteArray.find((e) => e?._id === taste._id)
                ? 'Active TasteCard'
                : 'TasteCard'
        "
    >
        <div class="TasteCard__image"><img :src="taste?.image" /></div>
        <div class="TasteCard__name">{{ taste?.name }}</div>
        <div class="TasteCard__price">{{ taste?.price }} ₽</div>
    </button>
</template>

<script lang="ts">
import { IAddTaste } from "../../entities/PizzaWindow/PizzaWindow.vue";
import { type PropType } from "vue";

export default {
    props: {
        taste: { type: Object, required: true },
        tasteArray: { type: Array as PropType<IAddTaste[]>, required: true },
    },
    methods: {
        addTaste(taste: object) {
            this.$emit("addTaste", taste);
        },
    },
};
</script>

<style lang="scss">
.TasteCard {
    overflow: hidden;
    transition: 0.3s;
    border: 1px solid rgb(203, 203, 203);
    display: flex;
    border-radius: 10px;
    padding: 5px;
    flex-direction: column;
    width: 105px;
    justify-content: center;
    align-items: center;
    height: 166px;
    &__image {
        height: 100px;
        overflow: hidden;
    }
    img {
        width: 100%;
    }
    &__name {
        font-size: 10px;
        height: 30px;
    }
}

.Active {
    border: 1px solid #ff4500;
    position: relative;
    transition: 0.3s;
    &::before {
        content: "";
        width: 24px;
        transition: 0.3s;

        height: 24px;
        background: url("../../assets/complete.svg");
        position: absolute;
        right: 0;
        top: 0;
    }
}
</style>
