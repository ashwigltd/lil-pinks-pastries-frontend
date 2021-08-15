<template>
  <!-- <v-container> -->
    <!-- <v-row class="text-center"> -->
      <!-- <v-col cols="12"> -->
        <div class="text-center" style="padding-left: ; max-width: 200px;">
        <q-img
          :src="logo"
          class="my-3"
          contain
          height="200"
        />
        </div>
      <!-- </v-col> -->
    <!-- </v-row> -->
  <!-- </v-container> -->
  <div class="q-pa-md">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <!-- clientName -->
      <q-input
        filled
        v-model="clientName"
        label="Name"
        hint="First and Last Name"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      ></q-input>
      <!-- email -->
      <q-input
        filled
        v-model="email"
        label="Email"
        hint="name@domain.com"
        lazy-rules
        :rules="[val => val !== null && val !== '' || 'Please type your email']"
      ></q-input>
      <!-- phoneNumber -->
      <q-input
        filled
        v-model="phoneNumber"
        label="Phone Number"
        hint="(000) 000-0000"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your Phone Number'
        ]"
      ></q-input>
      <!-- Pastry Selection -->
      <!-- Date Selection -->
      <q-date
        v-model="dateRequested"
        landscape
      ></q-date>
      <!-- Additional Details -->
      <q-field
        filled
        v-model="additionalDetails"
        label="Additional Details"
      ></q-field>
      <!-- Terms and Conditions -->
      <q-toggle
        v-model="accept"
        label="I accept the Terms and Condtions"
      ></q-toggle>
      <!-- Submit and Reset Buttons -->
      <div>
        <q-btn label="Submit" type="submit" color="primary"></q-btn>
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        ></q-btn>
      </div>
    </q-form>
  </div>
</template>

<script>
/* eslint no-const-assign: 0 */

import { useQuasar } from 'quasar'
import { ref } from 'vue'

import logo from '../assets/logo_original.png'

export default {
  name: 'ContactPage',

  setup () {
    const $q = useQuasar()

    const {
      clientName,
      email,
      phoneNumber,
      pastryChoice,
      dateRequested,
      additionalDetails
    } = ref(null)
    const accept = ref(false)

    return {
      clientName,
      email,
      phoneNumber,
      pastryChoice,
      dateRequested,
      additionalDetails,
      accept,

      onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept our Terms and Conditions first.'
          })
        } else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'We have received your request and will be in touch.'
          })
        }
      },

      onReset () {
        clientName = null
        email = null
        phoneNumber = null
        pastryChoice = null
        dateRequested = null
        additionalDetails = null
        accept.value = false
      }
    }
  },

  data: () => ({
    logo
  })
}
</script>
