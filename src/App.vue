<script setup lang="ts">
import Head from './features/Head/Head.vue';
import Footer from './features/Footer/Footer.vue';
import BasketWrapper from './shared/BasketWrapper/BasketWrapper.vue'
import RefresWrapper from './shared/RefreshWrapper/RefreshWrapper.vue'
</script>

<template>
      <div style="min-height: calc(100vh - 16rem);">
        <Head></Head> 
        <router-view></router-view>
        <BasketWrapper></BasketWrapper>
        <RefresWrapper></RefresWrapper>
      </div>
      <Footer></Footer>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
