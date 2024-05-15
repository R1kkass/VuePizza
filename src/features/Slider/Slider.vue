<template>
  <div class="relative mb-10 slider h-64 m-0 flex gap-5">
    <div
      @click="slide(215)"
      class="z-10 absolute left-0 text-5xl cursor-pointer text-orange-400 rounded-md"
      style="transform: translate(0%, -50%); top: 50%"
    >
      {{ "<" }}
    </div>
    <div
      class="slider relative w-100 h-64 flex"
      :style="{ marginLeft: left + 'px' }"
    >
      <div class="contentslider relative flex p-2 rounded-md bg-red-400 h-64">
        <h1 class="absolute left-0 text-9xl">😥</h1>
        <h1 class="content-end text-white text-2xl">Технические неполадки</h1>
      </div>
      <div class="contentslider relative flex p-2 rounded-md bg-orange-400 h-64">
        <h1 class="absolute left-0 text-9xl">🍕</h1>
        <h1 class="content-end text-white text-2xl">Обновленное меню</h1>
      </div>
      <div class="contentslider relative flex p-2 rounded-md bg-blue-300 h-64">
        <h1 class="absolute left-0 text-9xl">🍴</h1>
        <h1 class="content-end text-white text-2xl">Lunch in DodoPizza</h1>
      </div>
      <div class="contentslider relative flex p-2 rounded-md bg-yellow-300 h-64">
        <h1 class="absolute left-0 text-9xl">🥪</h1>
        <h1 class="content-end text-white text-2xl">Возьми завтрак с собой</h1>
      </div>
      <div class="contentslider relative flex p-2 rounded-md bg-orange-900 h-64">
        <h1 class="absolute left-0 text-9xl">🍫</h1>
        <h1 class="content-end text-white text-2xl">Новые десерты</h1>
      </div>
      <div class="contentslider relative flex p-2 rounded-md bg-purple-700 h-64">
        <h1 class="absolute left-0 text-9xl">👶</h1>
        <h1 class="content-end text-white text-2xl">Меню для детей</h1>
      </div>
      <div class="contentslider relative flex p-2 rounded-md bg-sky-400 h-64">
        <h1 class="absolute left-0 text-9xl">👍</h1>
        <h1 class="content-end text-white text-2xl">Покупатели рекомендуют DodoPizza</h1>
      </div>
      <div class="contentslider relative flex p-2 rounded-md bg-rose-300 h-64">
        <h1 class="absolute left-0 text-9xl">🥚</h1>
        <h1 class="content-end text-white text-2xl">Пасха</h1>
      </div>
      <div class="contentslider relative flex p-2 rounded-md bg-green-300 h-64">
        <h1 class="absolute left-0 text-9xl">🌴</h1>
        <h1 class="content-end text-white text-2xl">Первый день лета</h1>
      </div>
    </div>
    <div
      @click="slide(-215)"
      class="absolute right-0 text-5xl cursor-pointer text-orange-400"
      style="transform: translate(0%, -50%); top: 50%"
    >
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const left = ref(0);

function slide(num) {
    if(num>0 && left.value<0) left.value = left.value + num;
    if(num<0 && left.value>-215*9+window.innerWidth) left.value = left.value + num;
}
</script>
<style lang="scss">
.slider {
  overflow: hidden;
  gap: 15px;
  transition: 0.3s;
}

.contentslider {
  max-width: 200px;
  min-width: 200px;
}
</style>
