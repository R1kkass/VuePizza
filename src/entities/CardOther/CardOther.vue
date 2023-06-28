<template>
    <div class="Price">{{ pizza?.price }} ₽</div>
    <div class="Button">
        <MyButton color="lightOrange" type="medium">В корзину</MyButton>
    </div>
</template>

<script lang="ts">
import MyButton from "@/shared/MyButton/MyButton.vue";

export default {
    name: "CardOther",
    components: { MyButton },
    props: {
        pizza: { type: Object, required: true },
    },
};
</script>

<style lang="scss">
.CardOther {
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
