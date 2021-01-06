<template>
  <main class="container">
    <Hero />
    <RestaurantsInfo />
  </main>
</template>

<script>
import Hero from "@/components/Hero.vue";
import RestaurantsInfo from "@/components/RestaurantsInfo.vue";

export default {
  components: {
    Hero,
    RestaurantsInfo,
  },
};
</script>

<style>
</style>
