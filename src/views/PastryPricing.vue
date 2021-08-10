<template>
  <div class="pastrypricing">
    <PastryPricingPage/>
  </div>
</template>

<script>
import PastryPricingPage from '../components/PastryPricingPage.vue'

export default {
  name: 'PastryPricing',
  components: {
    PastryPricingPage
  },
  data () {
    return {
      headers: [{
        text: 'Size'
      }]
    }
  }
}
</script>
