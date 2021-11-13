<template>
  <v-row justify-md="space-around" justify="center" class="px-10 my-15">
    <v-col class="text-center" md="2" cols="12">
      <b class="text-md-caption text-body-1 secondary--text">
        Price of a bond</b
      >
      <br />
      <br />
      <b class="numbers text-h3 font-weight-bold">1m </b>
    </v-col>
    <v-col md="2" class="text-center" cols="12">
      <b class="text-md-caption text-body-1 secondary--text"
        >Amount of distrbiuted profit</b
      >
      <br />
      <br />
      <b class="numbers text-h3 font-weight-bold">505</b></v-col
    >
    <v-col md="3" class="text-center" cols="12">
      <b class="text-md-caption text-body-1 secondary--text"
        >Total bonds issued</b
      >
      <br />
      <br />
      <b class="numbers text-h3 font-weight-bold">7,542 DHS</b></v-col
    >
    <v-col md="5" class="text-center" cols="12">
      <b class="text-md-caption text-body-1 secondary--text">Market cap</b>
      <br />
      <br />
      <b class="numbers text-h3 font-weight-bold">505086746.37</b></v-col
    >
    <v-col class="mt-10 px-md-10" md="6" cols="12">
      <v-btn
        tile
        block
        class="price_btn pr-0"
        elevation="0"
        color="success"
        @click="priceIndex = !priceIndex"
      >
        <b class="text-md-h4 text-h6 font-weight-bold info--text">
          {{ priceIndex ? price[0] : price[1] }}
        </b>
        <div
          :class="[
            'price_icon',
            { 'price-icon-mobile': $vuetify.breakpoint.smAndDown },
          ]"
        >
          <v-icon class="text-h2">mdi-compare-horizontal</v-icon>
        </div>
      </v-btn>
    </v-col>
    <v-col class="mt-10 px-md-10" md="6" cols="12">
      <v-btn tile block class="price_btn pr-0" elevation="0" color="success">
        <b class="text-md-h4 text-h6 font-weight-bold info--text">
          1 Dor = 1 USDT
        </b>
        <div
          :class="[
            'price_icon',
            ' pt-5 ',
            'px-2',
            { 'price-icon-mobile': $vuetify.breakpoint.smAndDown },
          ]"
        >
          <span class="info--text">Read more about</span>
          <img src="/landing/DOR.png" alt="" />
        </div>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      scroll: false,
      price: ['1 DHS = 0.2722 USD', '3.6725 DHS = 1 USD'],
      priceIndex: false,
    }
  },
}
</script>


<style scoped>
.numbers {
  background: radial-gradient(
    circle,
    rgba(56, 87, 101, 1) 0%,
    rgba(219, 244, 255, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.price_btn {
  height: 110px !important;
  justify-content: left;
}
.price-icon-mobile {
  bottom: -80px;
}
.price_icon {
  position: absolute;
  height: 60px;
  overflow: hidden;
  right: -15px;
  background: linear-gradient(
    270deg,
    #133b4d 0%,
    rgba(22, 87, 115, 0.78) 29.24%,
    #133b4d 71.47%,
    rgba(19, 59, 77, 0.45) 100%
  );
}
</style>