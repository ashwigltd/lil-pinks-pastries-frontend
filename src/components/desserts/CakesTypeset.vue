<template>
  <div class="text-center">
    <div class="q-pa-md">
      <q-btn label="Cakes" color="primary" @click="cakeDialog = true"></q-btn>
      <q-dialog v-model="cakeDialog">
        <q-card>
          <q-card-section>
            <div class="title" primary-title>Cakes</div>
          </q-card-section>
          <q-card-section>
            <div class="row">
              <div class="cakeSize">4 inch Cake</div>
              <div class="cakePrice">&dollar;20.00</div>
            </div>
            <div class="row">
              <div class="cakeSize">6 inch Cake</div>
              <div class="cakePrice">&dollar;35.00</div>
            </div>
            <div v-for="item in items" :key="item.size" class="row">
              <div>{{ item.size }}</div>
            </div>
          </q-card-section>
          <!-- <q-card-section>
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
          <q-card-section> -->
            <!-- <ul style="padding-left: 20%"> -->
              <!-- <li>Flavors</li> -->
              <!-- <ul style="padding-left: 5%"> -->
                <!-- <li>Vanilla</li> -->
                <!-- <li>Chocolate</li> -->
                <!-- <li>Marble</li> -->
                <!-- <li>Red Velvet</li> -->
                <!-- <li>Carrot</li> -->
                <!-- <li>Coconut</li> -->
                <!-- <li>Strawberry</li> -->
                <!-- <li>FunFetti</li> -->
                <!-- <li>Lemon</li> -->
                <!-- <li>Pink Champagne</li> -->
              <!-- </ul> -->
            <!-- </ul> -->
            <!-- <ul style="padding-left: 10%">
              <li>Notes</li>
              <ul style="padding-left: 5%">
                <li>
                  Extra charges may be added for fondant, cake toppers, and
                  certain designs.
                </li>
                <li>
                  Please ask for any flavor not listed!
                </li>
              </ul>
            </ul>
          </q-card-section> -->
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
  name: 'CakesTypeset',
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
      },
      items: cakeRows
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 30pt;
}
.cakeSize {
  padding-right: 2rem;
}
.q-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
