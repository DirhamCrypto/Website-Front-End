<template>
  <div class="community_back mt-15">
    <v-row align-md="center">
      <v-col class="offset-md-4 text-md-center" md="4" cols="7">
        <h3
          class="
            text-md-h4 text-subtitle-1
            font-weight-medium
            my-15
            ml-md-0 ml-5
          "
        >
          Join Dirham Community
        </h3>
        <h5 class="text-caption d-none d-md-flex">
          Join our Telegram group to intigrate with some cool guys around the
          world to say flower and hear flower
        </h5>
        <a
          href="https://t.me/Dirham_Crypto"
          target="_blank"
          class="d-none d-md-block"
        >
          <v-btn
            tile
            elevation="0"
            class="my-15 community_btn py-2 accent--text font-weight-bold"
          >
            Join Telegram Group
            <img class="ml-5" src="/landing/telegram.svg" alt=""
          /></v-btn>
        </a>
      </v-col>
      <v-col md="4" cols="5">
        <lottie
          class="lottie"
          :options="lottieOptions"
          @animCreated="handleAnimation($event)"
        />
      </v-col>
    </v-row>
    <v-row class="d-md-none px-5">
      <v-col cols="12">
        <h5 class="text-body-2">
          Join our Telegram group to intigrate with some cool guys around the
          world to say flower and hear flower
        </h5>
      </v-col>
      <v-col cols="4">
        <a href="https://t.me/Dirham_Crypto" target="_blank">
          <v-btn
            tile
            elevation="0"
            class="my-15 community_btn py-2 accent--text font-weight-bold"
          >
            Join Telegram Group
            <img class="ml-5" src="/landing/telegram.svg" alt=""
          /></v-btn>
        </a>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue'
import * as card from '@/static/landing/community.json'
export default {
  components: {
    lottie,
  },
  data() {
    return {
      anim: null,
      lottieOptions: {
        animationData: card.default,
        loop: true,
        autoplay: true,
      },
    }
  },
  mounted() {
    this.anim.setSpeed(0.4)
  },
  methods: {
    handleAnimation(anim) {
      this.anim = anim
    },
  },
}
</script>


<style scoped>
.community_back {
  width: 100%;
  background: linear-gradient(
    270deg,
    #133b4d 0%,
    rgba(22, 87, 115, 0.78) 29.24%,
    #133b4d 71.47%,
    rgba(19, 59, 77, 0.45) 100%
  );
}
.community_btn {
  text-transform: none;
  background: linear-gradient(
    90.08deg,
    #ffea94 0.06%,
    #fff1ba 18.27%,
    #ffea95 51.13%,
    #fff6d0 73.3%,
    #ffea94 99.93%
  );
  height: auto !important;
}
.lottie {
  height: auto !important;
}
</style>