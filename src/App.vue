<script setup lang="ts">
import Header from './components/Header.vue'
import Card from './components/Card.vue'
</script>

<template>
  <div
    class="w-full p-5 min-w-[375px] min-h-screen gap-20 flex flex-col justify-center items-center"
  >
    <div class="mainDiv -z-10 absolute top-0 h-1/2 w-full"></div>
    <Header />
    <Card />
  </div>
</template>
