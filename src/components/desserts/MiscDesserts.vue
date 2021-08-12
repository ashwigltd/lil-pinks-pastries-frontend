<template>
  <div class="text-center">
    <div class="q-pa-md">
      <q-btn label="Misc. Pastries" color="primary" @click="miscDessertDialog = true"></q-btn>
      <q-dialog v-model="miscDessertDialog">
        <q-card>
          <q-card-section>
            <q-table
              grid
              title="Misc. Pastries"
              :rows="miscDessertRows"
              :columns="miscDessertColumns"
              row-key="pastryType"
              hide-header
              :pagination="paginationConfig"
            ></q-table>
          </q-card-section>
          <q-card-section>
            <ul style="padding-left: 25%">
              <li>Can deliver with an additional fee of $1.50/mile</li>
              <li>Please ask if any item you desire is not listed above!</li>
            </ul>
            <p></p>
          </q-card-section>
          <q-card-actions>
            <q-btn flat label="Close" color="primary" v-close-popup></q-btn>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>
import { miscDessertColumns, miscDessertRows } from '../../constants/desserts/miscDesserts/index'

export default {
  name: 'Cakes',
  setup () {
    return {
      miscDessertColumns, miscDessertRows
    }
  },
  data () {
    return {
      miscDessertDialog: false,
      paginationConfig: {
        rowsPerPage: 12
      }
    }
  }
}
</script>

<style scoped>
.q-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
