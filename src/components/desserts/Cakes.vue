<template>
  <div class="text-center">
    <v-dialog
      v-model="cakeDialog"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          dark
          v-bind="attrs"
          v-on="on"
        >
          Cake Pricing
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          Cake Pricing
        </v-card-title>
        <v-card-text>
          <v-data-table
            :headers="cakeHeaders"
            :items="cakes"
            v-model:expanded="expanded"
            item-key="cakeSize"
            show-expand
            class="elevation-1"
          >
            <template v-slot:expanded-item="{ cakeHeaders, item }">
              <td :colspan="cakeHeaders.length">
                More info about {{ item.cakeSize }} cakes.
              </td>
            </template>
          </v-data-table>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            @click="cakeDialog = false"
          >Close</v-btn>
        </v-card-actions>
      </v-card>

    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'Cakes',
  data () {
    return {
      expanded: [],
      cakeHeaders: [{
        text: 'Cake Size',
        align: 'start',
        sortable: false,
        value: 'cakeSize'
      }, {
        text: 'Price',
        value: 'price'
      }],
      cakes: [{
        cakeSize: '4 inches',
        price: '$20.00'
      }],
      cakeDialog: false
    }
  }
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
