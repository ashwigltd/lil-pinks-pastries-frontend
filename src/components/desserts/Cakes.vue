<template>
  <div class="text-center">
    <div class="q-pa-md">
      <q-btn label="Cakes" color="primary" @click="cakeDialog = true"></q-btn>
      <q-dialog v-model="cakeDialog">
        <q-card>
          <q-card-section>
            <q-table
              grid
              title="Cakes"
              :rows="cakeRows"
              :columns="cakeColumns"
              row-key="cakeRows.cakeSize"
              hide-header
              :pagination="paginationConfig"
            ></q-table>
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
import { cakeColumns, cakeRows } from '../../constants/desserts/cakes/index'

export default {
  name: 'Cakes',
  setup () {
    return {
      cakeColumns, cakeRows
    }
  },
  data () {
    return {
      cakeDialog: false,
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
