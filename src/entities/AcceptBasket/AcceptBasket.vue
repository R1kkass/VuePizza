<template>
    <div class="AcceptBasket">
        <div class="AcceptBasket__products"></div>
        <div class="AcceptBasket__price">
            <p>Сумма заказа</p>
            <p>{{ price }} ₽</p>
        </div>
        <div class="AcceptBasket__button">
            <OrderAccept
                v-if="access"
                :count="count"
                :price="price"
            ></OrderAccept>
            <AuthWindow
                v-else="access"
                :count="count"
                :price="price"
            ></AuthWindow>
        </div>
    </div>
</template>

<script lang="ts">
import MyButton from "../../shared/MyButton/MyButton.vue";
import OrderAccept from "../../entities/OrderAccept/OrderAccept.vue";
import AuthWindow from "../../entities/AuthWindow/AuthWindow.vue";

export default {
    components: { MyButton, OrderAccept, AuthWindow },
    props: {
        count: Number,
        price: Number,
    },
    computed: {
        access() {
            return localStorage.getItem("access_token");
        },
    },
};
</script>

<style lang="scss">
.AcceptBasket {
    position: absolute;
    bottom: 0px;
    gap: 20px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    font-weight: 700;
    width: 100%;
    &__price {
        display: flex;
        font-size: 15px;
        justify-content: space-between;
    }
}
</style>
