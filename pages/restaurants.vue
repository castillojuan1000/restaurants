<template>
  <main class="container restaurant">
    <div class="restaurantheading">
      <h1>Restaurants</h1>
      <SelectRestaurant @change="selectedRestaurant = $event" />
    </div>
    <RestaurantsInfo :dataSource="filteredRestaurants" />
  </main>
</template>

<script>
import RestaurantsInfo from "@/components/RestaurantsInfo.vue";
import SelectRestaurant from "@/components/SelectRestaurant.vue";
import { mapState } from "vuex";

export default {
  components: {
    RestaurantsInfo,
    SelectRestaurant,
  },
  data() {
    return {
      selectedRestaurant: "",
    };
  },
  computed: {
    ...mapState(["fooddata"]),
    filteredRestaurants() {
      if (this.selectedRestaurant) {
        return this.fooddata.filter((el) => {
          let name = el.name.toLowerCase();
          return name.includes(this.selectedRestaurant);
        });
      }
      return this.fooddata;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>