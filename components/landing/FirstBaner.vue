<template>
  <v-row class="mb-15">
    <v-col align-self="center" cols="12" md="7" class="pl-md-15">
      <div class="d-md-none" style="position: relative">
        <img class="strok-mobile" src="/landing/strok-mobile.png" alt="" />
        <lottie
          class="dhsCoin-mob"
          :options="lottieOptions"
          @animCreated="handleAnimation($event)"
        />
      </div>
      <h2
        :class="[
          'primary--text',
          'font-weight-bold',
          'mt-15',
          'ml-5',
          'ml-d-0',
          'text-h4',
          {
            title_baner: $vuetify.breakpoint.mdAndUp,
          },
        ]"
      >
        The Rise of Bonds <br />
        in The Blockchain World.
      </h2>
      <h3
        class="secondary--text font-weight-light mt-10 text-body-1 px-5 ml-md-0"
      >
        <b>Dirham Crypto</b> has developed Dirham for creating a strong and
        widely used currency to facilitate transactions and strengthen the
        global economy. By activating the potential capabilities of blockchain
        technology on a global scale, we can contribute to social growth and
        fight poverty.
      </h3>
      <v-row>
        <v-col class="ml-5 ml-md-0" md="4" cols="6">
          <v-btn
            class="
              btnGradiant
              accent--text
              font-weight-bold
              text-h5
              noneUppercase
              py-4
              mt-10
            "
            block
            elevation="0"
            tile
            >Get Dirham
            <img class="ml-5 dirham_icon_btn" src="/landing/D.svg" alt="" />
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
    <v-col md="4" class="offset-md-1 text-right pr-0 d-none d-md-block">
      <div
        style="position: relative"
        @mouseenter="hoverOnCoin(0.1)"
        @mouseleave="hoverOnCoin(1)"
      >
        <img class="strok" src="/landing/strok.png" alt="" />
        <lottie
          class="dhsCoin"
          :options="lottieOptions"
          @animCreated="handleAnimation($event)"
        />
        <!-- <img
          id="dhsCoin"
          src="/landing/coinMotion.png"
          class="dhsCoin"
          alt=""
          @mouseover="hoverInToken"
          @mouseleave="hoverOutToken"
        /> -->
      </div>
    </v-col>
  </v-row>
</template>

  
<script>
import lottie from 'vue-lottie/src/lottie.vue'
import * as Coin from '@/static/landing/landing_coin.json'

// const animateOption = {
//   easing: 'easeInOutQuad',
//   autoplay: true,
//   direction: 'alternate',
//   loop: true,
// }
// const keyframes = {
//   keyframes: [
//     { translateX: -40, translateY: -40 },
//     { translateX: -40, translateY: 40 },
//     { translateX: 0, translateY: 0 },
//   ],
// }

export default {
  name: 'FirstBaner',
  components: { lottie },
  data() {
    return {
      anim: null,
      lottieOptions: {
        animationData: Coin.default,
        loop: true,
        autoplay: true,
      },
    }
  },
  mounted() {
    // const dhsCoin = this.$anime({
    //   ...animateOption,
    //   duration: 40000,
    //   targets: '#dhsCoin',
    //   // scale: 1.1,
    //   ...keyframes,
    // })
    // dhsCoin.play()
  },
  methods: {
    handleAnimation(anim) {
      this.anim = anim
    },
    hoverOnCoin(speed) {
      this.anim.setSpeed(speed)
    },
    // hoverInToken() {
    //   const dhsCoinScaleIn = this.$anime({
    //     targets: '#dhsCoin',
    //     duration: 3000,
    //     scale: 1.05,
    //     ...animateOption,
    //   })
    //   dhsCoinScaleIn.play()
    // },
    // hoverOutToken() {
    //   const dhsCoinScaleOut = this.$anime({
    //     targets: '#dhsCoin',
    //     duration: 40000,
    //     scale: 1,
    //     ...animateOption,
    //     ...keyframes,
    //     loop: true,
    //   })
    //   dhsCoinScaleOut.play()
    // },
  },
}
</script>


<style scoped>
.btnGradiant {
  height: auto !important;
  justify-content: space-around;
  background: linear-gradient(
    90.08deg,
    #ffea94 0.06%,
    #fff1ba 18.27%,
    #ffea95 51.13%,
    #fff6d0 73.3%,
    #ffea94 99.93%
  );
}
.noneUppercase {
  text-transform: none;
}
.arabicPattern {
  position: absolute;
  right: 0px;
}
.parrent1 {
  position: relative;
  /* width: 100%; */
  /* right: 0px; */
  /* right: -100px; */
}
.strok {
  position: relative;
  width: 100%;
  z-index: 1;
  right: 0px;
  background-image: url('/landing/pattern.png');
  /* background-repeat: repeta; */
  background-size: contain;
  border-radius: 900px 0px 0px 900px;
}
.dhsCoin {
  width: 30vw !important;
  z-index: 2;
  position: absolute;
  top: 0px;
  right: 0px;
}
.dhsCoin-mob {
  z-index: 2;
  position: absolute;
  top: 8%;
  padding: 0 30px;
}
.dirham_icon_btn {
  width: 25px;
}
.title_baner {
  font-size: 4vw;
}
.caption_baner {
  font-size: 2vw;
}
.strok-mobile {
  width: 100%;
  border-radius: 0 0 50% 50%;
  background-image: url('/landing/pattern.png');
  background-size: cover;
}
</style>
