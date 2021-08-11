<template>
  <v-card>
    <v-card-title primary-title>
      Misc. Dessert Pricing
    </v-card-title>
    <v-card-actions>
      <v-btn
        text
        color="teal accent-4"
        v-on:click="miscDessertReveal = true"
      >View Pricing</v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="miscDessertReveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%"
      >
        <v-card-text>
          <!-- <v-data-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    Dessert
                  </th>
                  <th class="text-left">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in miscDesserts"
                  :key="item.dessert"
                >
                  <td>{{ item.dessert }}</td>
                  <td>{{ item.price }}</td>
                </tr>
              </tbody>
            </template>
          </v-data-table> -->
        </v-card-text>
        <v-card-actions>
          <v-btn text @click="miscDessertReveal = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: 'MiscDesserts',
  data: () => ({
    miscDessertReveal: false,
    miscDesserts: [{
      dessert: 'Cupcakes',
      price: '$2.50/ea'
    }, {
      dessert: 'Macarons',
      price: '$2.50/ea'
    }, {
      dessert: 'Cookies',
      price: '$2.00/ea'
    }, {
      dessert: 'Breakable Hearts',
      price: '$35.00/ea'
    }, {
      dessert: 'Pies',
      price: '$30.00/ea'
    }, {
      dessert: 'Hot Cocoa Bombs',
      price: '$6.00/ea or 4 for $20.00'
    }]
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
