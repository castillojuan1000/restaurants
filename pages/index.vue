<template>
  <main class="container">
    <Hero />
    <RestaurantsInfo :dataSource="fooddata" />
  </main>
</template>

<script>
import Hero from "@/components/Hero.vue";
import RestaurantsInfo from "@/components/RestaurantsInfo.vue";
import { mapState } from "vuex";

export default {
  components: {
    Hero,
    RestaurantsInfo,
  },
  computed: {
    ...mapState(["fooddata"]),
  },
};
</script>

<style>
</style>
