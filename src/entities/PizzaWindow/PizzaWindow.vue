<template>
    <Modal>
        <div class="PizzaWindow">
            <div class="PizzaWindow__image">
                <img :src="pizza?.image" />
            </div>
            <div class="PizzaWindow__description">
                <div class="Container">
                    <div class="Name">
                        <h3>{{ pizza?.name }}</h3>
                    </div>
                    <CharacPizza
                        :dough="dough"
                        :pizza="pizza"
                        :size="size"
                    ></CharacPizza>
                    <div class="Ingredient">{{ pizza?.ingredients }}</div>
                    <div class="Buttons">
                        <ButtonsPizza
                            @setTaste="setTaste"
                            @setDough="setDough"
                        ></ButtonsPizza>
                    </div>
                    <div class="AddTaste">
                        <h3>Добавить по вкусу</h3>
                        <div class="AddTaste__list">
                            <TasteCard
                                :tasteArray="addTaste"
                                @addTaste="pushTaste(taste)"
                                v-for="taste in $store.state.taste"
                                :taste="taste"
                            ></TasteCard>
                        </div>
                    </div>
                </div>
                <div class="ButtonBasket">
                    <MyButton @click="addBasket" color="orange" type="large"
                        >Добавить в корзину за
                        {{ price }}
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
import { GetTaste } from "@/app/api/TasteApi";
import CharacPizza from "@/shared/CharacPizza/CharacPizza.vue";
import { AddBasketApi } from "@/app/api/BasketApi";

export interface IAddTaste {
    _id: string;
    name: string;
    price: string;
}

interface BaseComponentData {
    addTaste: IAddTaste[];
    size: ISize;
    dough: string;
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
    computed: {
        price() {
            return (
                Number(this.pizza?.price) +
                this.addTaste.reduce(
                    (acc, key) => Number(key?.price) + acc,
                    0
                ) +
                Number(this.size.price)
            );
        },
    },
    data(): BaseComponentData {
        return {
            size: { name: "Средняя", price: "0" },
            dough: "Традиционное",
            addTaste: [],
        };
    },
    components: { Modal, MyButton, ButtonsPizza, TasteCard, CharacPizza },
    methods: {
        close() {
            this.$emit("close");
        },
        setTaste(e: ISize) {
            this.size = e;
        },
        setDough(e: string) {
            this.dough = e;
        },
        pushTaste(e: IAddTaste) {
            if (
                !this.addTaste.find((key) => {
                    return key._id === e._id;
                })
            ) {
                this.addTaste.push(e);
            } else {
                this.addTaste = this.addTaste.filter(
                    (key) => key._id !== e._id
                );
            }
        },
        addBasket() {
            AddBasketApi({
                price: this.price,
                basketId: localStorage.getItem("basketId") || "",
                product: {
                    _id: this.pizza?._id,
                    addTaste: this.addTaste,
                    name: this.pizza?.name,
                    dough: this.dough,
                    size: this.size.name,
                    image: this.pizza?.image,
                    ...this.pizza,
                },
                count: 1,
            }).then(() => this.close());
        },
    },
    async mounted() {
        await GetTaste().then((e) => this.$store.commit("setTaste", e));
    },
};
</script>

<style lang="scss">
.PizzaWindow {
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
            overflow-y: scroll;
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
