<template>
    <div>
        <p>{{ `${size?.name}, ${dough}, ${pizza?.weight} г` }}</p>
    </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { ISize } from "../../entities/PizzaWindow/PizzaWindow.vue";

export default {
    name: "CharaPizza",
    props: {
        size: Object as PropType<ISize>,
        dough: String,
        pizza: Object,
    },
};
</script>
