<template>
    <div class="Price">от {{ pizza.price - 300 }} ₽</div>
    <div class="Button">
        <MyButton color="lightOrange" type="medium">Собрать</MyButton>
    </div>
</template>

<script lang="ts">
import MyButton from "@/shared/MyButton/MyButton.vue";

export default {
    name: "PricPizza",
    components: { MyButton },
    props: {
        pizza: {
            type: Object,
            required: true,
        },
    },
};
</script>
