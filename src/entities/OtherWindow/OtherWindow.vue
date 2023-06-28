<template>
    <Modal>
        <div class="OtherWindow">
            <div class="OtherWindow__image">
                <img :src="pizza?.image" />
            </div>
            <div class="OtherWindow__description">
                <div class="Container">
                    <div class="Name">
                        <h3>{{ pizza?.name }}</h3>
                    </div>
                    <div class="Ingredient">{{ pizza?.weight }}</div>
                    <div class="Ingredient">{{ pizza?.ingredients }}</div>
                </div>
                <div class="ButtonBasket">
                    <MyButton @click="addBasket" color="orange" type="large"
                        >Добавить в корзину за
                        {{ pizza?.price }}
                        ₽
                    </MyButton>
                </div>
            </div>
        </div>
    </Modal>
</template>

<script lang="ts">
import Modal from "@/shared/Modal/Modal.vue";
import MyButton from "@/shared/MyButton/MyButton.vue";
import ButtonsPizza from "@/shared/ButtonsPizza/ButtonsPizza.vue";
import TasteCard from "@/shared/TasteCard/TasteCard.vue";
import CharacPizza from "@/shared/CharacPizza/CharacPizza.vue";
import { AddBasketApi } from "@/app/api/BasketApi";

export interface IAddTaste {
    _id: string;
    name: string;
    price: string;
}

export interface ISize {
    name: string;
    price: string;
}

export default {
    name: "PizzaWindow",
    props: {
        pizza: Object,
    },
    components: { Modal, MyButton, ButtonsPizza, TasteCard, CharacPizza },
    methods: {
        close() {
            this.$emit("close");
        },
        addBasket() {
            AddBasketApi({
                price: this.pizza?.price,
                basketId: localStorage.getItem("basketId") || "",
                product: {
                    _id: this.pizza?._id,
                    ...this.pizza,
                },
                count: 1,
            }).then(() => this.close());
        },
    },
};
</script>

<style lang="scss">
.OtherWindow {
    display: flex;
    height: 450px;

    &__image {
        width: 450px;
        height: 450px;
        img {
            max-height: 100%;
            min-width: 100%;
        }
    }
    &__description {
        display: flex;
        flex-direction: column;
        width: 400px;
        padding: 10px;
        position: relative;
        margin-bottom: 40px;
        .Name {
            font-size: 24px;
        }
        .Ingredient {
            margin-top: 10px;
            font-size: 13px;
            opacity: 0.7;
        }
        .Container {
            &::-webkit-scrollbar-track {
                background: #ededed;
            }

            /* Handle */
            &::-webkit-scrollbar-thumb {
                background: #ffc85e;
                width: 15px;
                border-radius: 100px;
            }

            /* Handle on hover */
            &::-webkit-scrollbar-thumb:hover {
                background: red;
                width: 100px;
            }
        }
    }
    .ButtonBasket {
        position: absolute;
        bottom: -40px;
        right: 0;
        width: 99%;
        button {
            width: 100%;
        }
    }
    .AddTaste {
        margin-top: 10px;
        &__list {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 10px;
            margin-bottom: 10px;
        }
    }
}
</style>
