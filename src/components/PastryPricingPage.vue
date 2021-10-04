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

          <!-- <v-card> -->
            <h1>Cake Pricing</h1>
            <!-- <v-card-title>Cakes</v-card-title>
            <v-card-actions>
              <v-btn text color="teal accent-4" @click="reveal = true">
                Pricing
              </v-btn>
            </v-card-actions> -->

            <!-- <v-expand-transition> -->
              <!-- <v-card
                v-if="reveal = true"
                class="transition-fast-in-fast-out v-card--reveal"
                style="height: 100%"
              >
                <v-card-text class="pb-0">
                  <p class="text-h4 text--primary">
                    Cake Pricing
                  </p>
                </v-card-text>
              </v-card> -->
                  <v-img :src="cakePricingFlier" class="my-3" height="700" />
            <!-- </v-expand-transition> -->
          <!-- </v-card> -->

  </v-container>
</template>

<script>
import logo from '../assets/logo_original.png'
// import cakePricing from '../assets/cakePricing.jpg'
// import additionalPricing from '../assets/additionalPricing.jpg'
// import servingSize from '../assets/servingSize.jpg'
import cakePricingFlier from '../assets/cakePricing.jpg'

export default {
  name: 'PastryPricingPage',
  components: {
  },

  data: () => ({
    logo,
    cakePricingFlier,
    reveal: false
  })
}
</script>

<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
