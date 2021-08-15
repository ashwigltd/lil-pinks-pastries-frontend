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

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3 text-pink-lighten-3">
          <div class="title">Lil Pink&apos;s Pastries</div>
        </h1>

        <p class="subheading font-weight-regular text-white">
          Placeholder text descibing the company mission statement, goals,
          achievements, etc.
        </p>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import logo from '../assets/logo_original.png'

export default {
  name: 'HomePage',

  data: () => ({
    logo
  })
}
</script>

<style>
#title {
  font-family: 'Style Script', cursive;
  font-size: 35pt;
}</style>
