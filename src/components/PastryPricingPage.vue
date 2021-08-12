<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="logo"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
    </v-row>

    <div>
      <Cakes></Cakes>
    </div>
    <br>
    <div>
      <MiscDesserts></MiscDesserts>
    </div>

  </v-container>
</template>

<script>
import logo from '../assets/logo_original.png'
import Cakes from './desserts/Cakes.vue'
import MiscDesserts from '../components/desserts/MiscDesserts.vue'

export default {
  name: 'PastryPricingPage',
  components: {
    Cakes,
    MiscDesserts
  },

  data: () => ({
    logo
  })
}
</script>
