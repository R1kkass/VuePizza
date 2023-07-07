<template>
    <div v-if="pizza.category === category" @click="query" class="CardPizza">
        <div class="CardPizza__image">
            <img :alt="pizza.name" :src="pizza.image" />
        </div>
        <div class="CardPizza__description">
            <div class="Name">
                {{ pizza.name }}
            </div>
            <div class="Description">
                {{ pizza.ingredients }}
            </div>
            <div class="PriceButton">
                <slot name="type" />
            </div>
        </div>
    </div>
    <slot name="modal" :close="setShow" v-if="show" :pizza="pizza"></slot>
</template>

<script lang="ts">
import MyButton from "@/shared/MyButton/MyButton.vue";
import PizzaWindow from "../PizzaWindow/PizzaWindow.vue";

export default {
    components: { MyButton, PizzaWindow },
    name: "CardPizza",
    props: {
        pizza: { type: Object, required: true },
        category: { type: String, required: true },
    },
    data() {
        return {
            show: false,
        };
    },
    methods: {
        setShow() {
            this.show = !this.show;
        },
        query() {
            this.show = true;
            this.$router.push({
                path: this.$route.path,
                query: { modal: "true" },
            });
        },
    },
    watch: {
        "$route.query.modal": function () {
            if (!this?.$route?.query?.modal) {
                this.show = false;
            }
        },
    },
};
</script>

<style lang="scss">
.CardPizza {
    display: flex;
    flex-direction: column;
    width: 23%;
    transition: 0.3s;
    cursor: pointer;
    min-width: 200px;
    &:hover {
        transition: 0.3s;
        img {
            transform: translate(0, 10px);
        }
    }
    &__image {
        margin-bottom: 10px;
        height: 60%;
        transition: 0.3s;
        img {
            transition: 0.3s;
            width: 100%;
        }
    }
    &__description {
        .Name {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 5px;
        }
        .Description {
            font-size: 13px;
            opacity: 0.7;
            height: 100px;
            overflow: hidden;
        }
        .PriceButton {
            margin-top: 10px;
            font-weight: 700;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .Price {
                font-size: 20px;
            }
            .Button {
                button {
                    width: fit-content;
                    padding-inline: 10px;
                }
            }
        }
    }
}
</style>
