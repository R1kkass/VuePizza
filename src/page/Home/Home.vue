<template>
  <div class="">
    <Slider />
    <div class="Home">
      <h1>Пицца</h1>
      <div id="pizza" class="List">
        <CardPizza
          :category="'Пицца'"
          :pizza="pizza"
          v-for="pizza in $store.state.pizza"
          :key="pizza._id"
        >
          <template v-slot:type><PricePizza :pizza="pizza" /></template>
          <template v-slot:modal="modalprops"
            ><PizzaWindow @close="modalprops.close" :pizza="modalprops.pizza"
          /></template>
        </CardPizza>
      </div>
      <BlockProducts id="snack" :category="'Закуски'" :name="'Закуски'" />
      <BlockProducts id="drink" :category="'Напитки'" :name="'Напитки'" />
      <BlockProducts id="dessert" :category="'Десерт'" :name="'Десерт'" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<script lang="ts">
import axios from "axios";
import { domen } from "../../app/const/domen";
import CardPizza from "../../entities/CardPizza/CardPizza.vue";
import Modal from "@/shared/Modal/Modal.vue";
import CardOther from "@/entities/CardOther/CardOther.vue";
import PricePizza from "@/shared/PricePizza/PricePizza.vue";
import PizzaWindow from "@/entities/PizzaWindow/PizzaWindow.vue";
import OtherWindow from "@/entities/OtherWindow/OtherWindow.vue";
import BlockProducts from "@/features/BlockProducts/BlockProducts.vue";
import Slider from "@/features/Slider/Slider.vue";

document.title = "Главная";

export default {
  name: "Home",
  components: {
    CardPizza,
    Modal,
    CardOther,
    PricePizza,
    PizzaWindow,
    OtherWindow,
    Slider,
    BlockProducts,
  },
  async mounted() {
    const pizza = await axios.get(`${domen}/pizza/getall`);
    this.$store.commit("setPizza", pizza.data.pizzas);
  },
};
</script>

<style lang="scss">
.Home {
  width: 1280px;
  margin: 0 auto;
  @media screen and (max-width: 1300px) {
    width: 90%;
  }
}
.List {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
