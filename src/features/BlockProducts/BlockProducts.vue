<template>
    <h1>{{ name }}</h1>
    <div id="snack" class="List">
        <CardPizza
            :category="category"
            :pizza="pizza"
            v-for="pizza in $store.state.pizza"
            :key="pizza._id"
        >
            <template v-slot:modal="modalprops"
                ><OtherWindow
                    @close="modalprops.close"
                    :pizza="modalprops.pizza"
                />
            </template>
            <template v-slot:type>
                <CardOther :pizza="pizza" />
            </template>
        </CardPizza>
    </div>
</template>

<script setup lang="ts">
import CardOther from "@/entities/CardOther/CardOther.vue";
import OtherWindow from "@/entities/OtherWindow/OtherWindow.vue";
import CardPizza from "@/entities/CardPizza/CardPizza.vue";
defineProps({
    name: String,
    category: {
        type: String,
        required: true
    },
});
</script>
