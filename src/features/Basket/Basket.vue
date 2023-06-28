<template>
    <Teleport to="body">
        <div class="Basket" @click="$store.commit('switchBasket')">
            <div class="Basket__close">
                <Close />
            </div>
            <div @click.stop.prevent="" class="Basket__content">
                <div v-if="$store.state.basket.length">
                    <CountBasket :price="price" :count="count" />
                    <div class="Content">
                        <CardProductBasket
                            v-for="basket in $store.state.basket"
                            :product="basket"
                        />
                    </div>
                    <div class="Basket__price">
                        <AcceptBasket :price="price" :count="count" />
                    </div>
                </div>
                <NoProduct v-else="$store.state.basket.length" />
            </div>
        </div>
    </Teleport>
</template>

<script lang="ts">
import Close from "../../assets/Close.vue";
import CardProductBasket from "../../entities/CardProductBasket/CardProductBasket.vue";
import CountBasket from "../../shared/CountBasket/CountBasket.vue";
import AcceptBasket from "../../entities/AcceptBasket/AcceptBasket.vue";
import { IDataBasket } from "../../app/api/BasketApi";
import NoProduct from "../../shared/NoProduct/NoProduct.vue";

export default {
    components: {
        Close,
        CardProductBasket,
        CountBasket,
        AcceptBasket,
        NoProduct,
    },
    mounted() {
        this.$store.dispatch("fetchBasket");
        document.body.style.overflowY = "hidden";
    },
    unmounted() {
        document.body.style.overflowY = "scroll";
    },
    computed: {
        count() {
            return this.$store?.state?.basket?.reduce(
                (acc: number, key: IDataBasket) => acc + key?.count,
                0
            );
        },
        price() {
            return this.$store?.state?.basket?.reduce(
                (acc: number, key: IDataBasket) => acc + Number(key?.price),
                0
            );
        },
    },
};
</script>

<style scope lang="scss">
.Basket {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;

    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: flex-end;
    z-index: 10;
    &__noProduct {
        min-height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        line-height: 30px;
        p {
            font-size: 12px;
        }
    }
    &__content {
        background: white;
        width: 430px;
        min-height: 100vh;
        height: fit-content;
        position: relative;
        .Content {
            overflow-y: scroll;
            margin-bottom: 100px;
            max-height: calc(100vh - 180px);
        }
    }
    &__close {
        cursor: pointer;
        margin-right: 20px;
        height: fit-content;
        margin-top: auto;
        position: fixed;
        right: 450px;
        top: 50%;
        margin-bottom: auto;
    }
}
</style>
