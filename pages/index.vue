<template>
  <div>
    <FirstBaner />
    <Motion />
    <WhyDirham />
    <BuyRedeem />
    <PlaceYourRequest />
    <Statistics />
    <Roadmap />
    <Community />
  </div>
</template>

  
<script>
import FirstBaner from '@/components/landing/FirstBaner.vue'
import Motion from '@/components/landing/Motion.vue'
import WhyDirham from '@/components/landing/WhyDirham.vue'
import BuyRedeem from '@/components/landing/BuyRedeem.vue'
import PlaceYourRequest from '@/components/landing/PlaceYourRequest.vue'
import Statistics from '@/components/landing/Statistics.vue'
import Roadmap from '@/components/landing/Roadmap.vue'
import Community from '@/components/landing/Community.vue'

export default {
  components: {
    FirstBaner,
    Motion,
    WhyDirham,
    BuyRedeem,
    PlaceYourRequest,
    Statistics,
    Roadmap,
    Community,
  },
  data() {
    return {}
  },
}
</script>


<style scoped>
</style>
