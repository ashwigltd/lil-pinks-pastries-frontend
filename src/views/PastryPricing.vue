<template>
  <div class="pastrypricing">
    <h1 class="text-pink-lighten-3">Pastry Pricing</h1>
    <v-card>
      <v-card-title style="background-color: pink">Cakes</v-card-title>
      <v-card-text>
        <v-list>
        </v-list>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      headers: [{
        text: 'Size'
      }]
    }
  }
}
</script>
