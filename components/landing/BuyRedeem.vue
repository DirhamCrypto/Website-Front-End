<template>
  <div class="pa-md-15 pa-5 pb-15">
    <h3 class="text-h5">Buy or Redeem Dirham Crypto :</h3>
    <v-row class="mt-10" justify-md="space-between" justify="center">
      <v-col cols="11" md="4">
        <v-btn
          tile
          outlined
          block
          class="buy_redeem_btn py-md-5 py-1"
          elevation="0"
          @click="openWindow(dhs.web)"
          @mouseenter="dhs.active = dhs.url[1]"
          @mouseleave="dhs.active = dhs.url[0]"
        >
          DirhamSwap
          <img
            :class="[
              $vuetify.breakpoint.mdAndUp ? 'logo-btn' : 'logo-btn-mobile',
            ]"
            :src="`landing/redeem/${dhs.active}.svg`"
            alt=""
          />
        </v-btn>
      </v-col>
      <v-col cols="11" md="4">
        <v-btn
          class="buy_redeem_btn py-md-5 py-1"
          elevation="0"
          block
          tile
          outlined
          @mouseenter="pancake.active = pancake.url[1]"
          @mouseleave="pancake.active = pancake.url[0]"
        >
          Pancake Swap
          <img
            :class="[
              $vuetify.breakpoint.mdAndUp ? 'logo-btn' : 'logo-btn-mobile',
            ]"
            :src="`landing/redeem/${pancake.active}.svg`"
            alt=""
          />
        </v-btn> </v-col
      ><v-col cols="11" md="4">
        <v-btn
          class="buy_redeem_btn py-md-5 py-1"
          elevation="0"
          tile
          outlined
          block
          @mouseenter="uni.active = uni.url[1]"
          @mouseleave="uni.active = uni.url[0]"
        >
          Uniswap
          <img
            :class="[
              $vuetify.breakpoint.mdAndUp ? 'logo-btn' : 'logo-btn-mobile',
            ]"
            :src="`landing/redeem/${uni.active}.svg`"
            alt=""
          />
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'BuyRedeem',
  data() {
    return {
      dhs: {
        web: 'https://dirhamswap.io/#/',
        url: ['dhs', 'dhsHover'],
        active: 'dhs',
      },
      pancake: { url: ['pancake', 'pancakeHover'], active: 'pancake' },
      uni: { url: ['uni', 'uniHover'], active: 'uni' },
    }
  },
  methods: {
    openWindow(url) {
      window.open(url, '_blank')
    },
  },
}
</script>

<style scoped>
.buy_redeem_btn {
  justify-content: space-between;
  text-transform: none;
  background: none;
  border: solid 4px #dbf4ff;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  height: auto !important;
}
.buy_redeem_btn:hover {
  border: solid 4px #ffea94;
  color: #ffea94;
}
.logo-btn {
  width: 70px;
  height: 70px;
}
.logo-btn-mobile {
  width: 50px;
  height: 50px;
}
</style>