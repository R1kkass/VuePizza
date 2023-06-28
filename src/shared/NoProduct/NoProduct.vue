<template>
    <div class="Basket__noProduct">
        <Dog />
        <h3>Ой пусто</h3>
        <p>Ваша корзина пуста, откройте «Меню»</p>
    </div>
</template>

<script lang="ts">
import Dog from "../../assets/Dog.vue";

export default {
    components: { Dog },
    name: "NoProduct",
};
</script>
