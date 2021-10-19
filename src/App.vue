<template>
  <v-app :style="{background: $vuetify.theme.themes.dark.background}">
    <v-app-bar color="black" app>
      <v-app-bar-title id="title" class="text-pink-lighten-3">
        Lil Pink&apos;s Pastries
      </v-app-bar-title>
      <v-btn color="black" flat class="text-white" to="/">Home</v-btn>
      <v-btn color="black" flat class="text-white" to="/pastrypricing">Pricing</v-btn>
      <v-btn color="black" flat class="text-white" to="/gallery">Gallery</v-btn>
      <v-btn color="black" flat class="text-white" to="/contact">Contact</v-btn>
      <!-- <v-btn color="black" flat class="text-white" to="/about">About</v-btn> -->
    </v-app-bar>

    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer style="background-color: grey.darken;" max-height="75px" app>
      <div>
        &copy; 2021 Lil Pink&apos;s Pastries
      </div>
      <v-spacer></v-spacer>
      <div>
        This site was made with&nbsp;
        <v-icon
          class="text-red"
          icon="fas fa-heart"
        ></v-icon>
        &nbsp;by
        <a
           href="https://ash.ashwigltd.com"
           target="_blank"
        >Ash Hellwig</a>
        at <i>AshWig, Ltd.</i>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>

<style scoped>
#title {
  font-family: 'Style Script', cursive;
  font-size: 35pt;
}
</style>
