<script setup lang="ts">
import Head from './features/Head/Head.vue';
// import Home from './page/Home/Home.vue';
</script>

<template>
      <Head></Head>
      <!-- <Home></Home> -->
      <router-view></router-view>
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
