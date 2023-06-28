<template>
    <div class="CardProductBasket">
        <div class="CardProductBasket__info">
            <div class="CardProductBasket__image">
                <img
                    :alt="product?.product?.name"
                    :src="product?.product?.image"
                />
            </div>
            <div class="CardProductBasket__text">
                <p class="Name">{{ product?.product?.name }}</p>
                <p class="Charac" v-if="product?.product.size">
                    {{
                        `${product?.product?.size}, ${product?.product?.dough}`
                    }}
                </p>
            </div>
            <div class="Delete">
                <DeleteBasket :id="product?._id || '1'"></DeleteBasket>
            </div>
        </div>
        <div class="CardProductBasket__setting">
            <div class="Price">{{ product?.price }} ₽</div>
            <div class="Counter">
                <Counter :pizza="product"></Counter>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { IDataBasket } from "../../app/api/BasketApi";
import Counter from "../../shared/Counter/Counter.vue";
import DeleteBasket from "../../shared/DeleteBasket/DeleteBasket.vue";

export default {
    name: "CardProductBasket",
    props: {
        product: {
            type: Object as PropType<IDataBasket>,
            required: false,
        },
    },
    components: { Counter, DeleteBasket },
};
</script>

<style lang="scss">
.CardProductBasket {
    padding: 10px;
    &__setting {
        display: flex;
        justify-content: space-between;
        font-size: 18px;
        font-weight: 1000;
    }
    &__image {
        img {
            width: 60px;
            height: 60px;
        }
    }
    &__info {
        display: flex;
        line-height: 30px;
        .Name {
            font-size: 16px;
            font-weight: 700;
        }
        .Charac {
            font-size: 12px;
        }
        .Delete{
            margin-left: auto;
        }
    }
}
</style>
