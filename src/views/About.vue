<template>
  <div class="aboutus overflow-hidden">
    <MobileNavigation />
    <div class="d-md-none">
          <v-row  class="text-center" >
            <v-col>
          <h3 class="white--text">About Us</h3>
         Navigation </v-col>
          </v-row>
          <v-row  justify="center">
            <v-col cols="9">
              <v-img width="100%" src="../assets/aboutus/men.png"></v-img>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="10" class="offset-1">
              <p class="text-justify white--text tenorsans">
                Dirham Crypto is tasked with setting up DrachmaDAO consisted of Tech
                enthusiasts and financial experts to drive the organization and make
                it grow toward the more adoption of the international AED market by
                developing and supporting a stablecoin called Dirham. We believe
                people all around the world have to be able to decide for their own
                financial situation freely and safely. As you may know, AED has been a
                successfully adopted fiat currency by the observation of Great United
                Arab Emirates and we truly believe we can help it grow bigger in the
                international modern markets using Blockchain innovation and DeFi.
              </p>
            </v-col>
          </v-row>
         
    </div>
    <v-responsive :min-height="screenHeigth-200" class="d-none d-md-flex">
      <v-row class="pt-15  d-md-flex d-none"></v-row>
      <v-row class="pt-15 my-5  d-md-flex d-none" justify="center">
        <h5 class="white--text">About Us</h5>
      </v-row>
      <v-row >
        <v-col class="offset-md-2 offset-1" md="4" cols="10">
          <p class="text-justify white--text tenorsans">
            Dirham Crypto is tasked with setting up DrachmaDAO consisted of Tech
            enthusiasts and financial experts to drive the organization and make
            it grow toward the more adoption of the international AED market by
            developing and supporting a stablecoin called Dirham. We believe
            people all around the world have to be able to decide for their own
            financial situation freely and safely. As you may know, AED has been a
            successfully adopted fiat currency by the observation of Great United
            Arab Emirates and we truly believe we can help it grow bigger in the
            international modern markets using Blockchain innovation and DeFi.
          </p>
        </v-col>
        <v-col align-self="center" cols="3" class="offset-1 d-none d-md-flex">
          <v-img max-width="70%" src="../assets/aboutus/men.png"></v-img>
        </v-col>
      </v-row>
    </v-responsive>
  </div>
</template>

<script>
import MobileNavigation from '../components/MobileNavigation';
export default {
  name:'About',
  components:{
    MobileNavigation
  },
  data() {
    return {
      screenSize: false,
      screenHeigth: 0,
      
      group: null,
    };
  },
  
  created() {
    this.screenSize = window.screen.width > 960;

    this.screenHeigth = window.innerHeight;
  },
  updated(){
    this.screenHeigth = window.innerHeight;
  }
};
</script>
<style scoped>
.aboutus {
  
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 10%,
    rgba(0, 0, 0, 0.5) 90%,
    rgba(0, 0, 0, 0) 100%
  );
}
</style>