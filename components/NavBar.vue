<template>
  <nav>
    <ul>
      <li>
        <nuxt-link exact to="/"><Logo /></nuxt-link>
      </li>
      <li><nuxt-link to="/restaurants">Restaurants</nuxt-link></li>
    </ul>
    <div v-if="cart.length" class="smallnum">{{ totalItemsCount }}</div>
    <nuxt-link to="/cart">Cart</nuxt-link>
  </nav>
</template>

<script>
import Logo from "@/components/Logo.vue";
import { mapState } from "vuex";

export default {
  components: {
    Logo,
  },
  computed: {
    ...mapState(["cart"]),
    totalItemsCount() {
      return this.cart.reduce(
        (acc, currentItem) => acc + +currentItem.count,
        0
      );
    },
  },
};
</script>

<style lang="scss" scoped>
</style>