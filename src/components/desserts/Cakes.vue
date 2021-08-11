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
              row-key="cakeSize"
              hide-header
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
const cakeColumns = [{
  name: 'cakeSize',
  label: 'Cake Size',
  align: 'start',
  sortable: false,
  field: cakeRow => cakeRow.cakeSize,
  format: val => `${val}`
}, {
  name: 'cakePrice',
  label: 'Price',
  sortable: false,
  field: cakeRow => cakeRow.price,
  format: val => `${val}`
}]

const cakeRows = [{
  cakeSize: '4 inches',
  price: '$20.00'
}, {
  cakeSize: '6 inches',
  price: '$35.00'
}, {
  cakeSize: '8 inches',
  price: '$45.00'
}, {
  cakeSize: '10 inches',
  price: '$60.00'
}, {
  cakeSize: '12 inches',
  price: '$75.00'
}, {
  cakeSize: '4 and 6 inches',
  price: '$55.00'
}, {
  cakeSize: '6 and 8 inches',
  price: '$120.00'
}, {
  cakeSize: '8 and 10 inches',
  price: '$200.00'
}, {
  cakeSize: '10 and 12 inches',
  price: '$300.00'
}, {
  cakeSize: '4, 6, and 8 inches',
  price: '$135.00'
}, {
  cakeSize: '6, 8, and 10 inches',
  price: '$230.00'
}, {
  cakeSize: '8, 10, and 12 inches',
  price: '$375.00'
}]

export default {
  name: 'Cakes',
  setup () {
    return {
      cakeColumns,
      cakeRows
    }
  },
  data () {
    return {
      cakeDialog: false
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
