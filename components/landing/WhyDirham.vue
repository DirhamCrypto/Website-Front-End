<template>
  <div class="why_dirham px-md-15 px-5">
    <v-row class="py-15">
      <v-col align-self="center" cols="6">
        <h3 class="secondary--text text-h5">Why Dirham?</h3>
      </v-col>
      <v-col align-self="center" cols="6" class="text-right d-md-none">
        <v-btn
          :disabled="indexCard < 1"
          tile
          class="bk_arrow"
          @click="previousCard"
        >
          <v-icon color="primary" class="text-h4">mdi-arrow-left</v-icon>
        </v-btn>
        <v-btn
          :disabled="indexCard > 7"
          tile
          class="bk_arrow"
          @click="nextCard()"
        >
          <v-icon color="primary" class="text-h4">mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-window v-model="indexCard" class="">
      <v-window-item
        v-for="(card, index) in $vuetify.breakpoint.mdAndUp ? 3 : 9"
        :key="index"
        class="py-15"
      >
        <v-row>
          <v-col class="" md="4" cols="12">
            <div
              class="why_dirham_card px-5 pt-15"
              @mouseenter="
                play(indexCard * ($vuetify.breakpoint.mdAndUp ? 3 : 1))
              "
            >
              <lottie
                class="lottie"
                :options="
                  lottieOptions[
                    indexCard * ($vuetify.breakpoint.mdAndUp ? 3 : 1)
                  ]
                "
                @animCreated="
                  handleAnimation(
                    $event,
                    indexCard * ($vuetify.breakpoint.mdAndUp ? 3 : 1)
                  )
                "
              />
              <h4 class="mt-5 primary--text text-h5">
                {{
                  cards[indexCard * ($vuetify.breakpoint.mdAndUp ? 3 : 1)].title
                }}
              </h4>
              <p class="text-body-1 info--text">
                {{
                  cards[indexCard * ($vuetify.breakpoint.mdAndUp ? 3 : 1)]
                    .caption
                }}
              </p>
            </div>
          </v-col>

          <v-col v-if="$vuetify.breakpoint.mdAndUp" class="" md="4">
            <div
              class="why_dirham_card mx-auto px-5 pt-15"
              @mouseenter="play(indexCard * 3 + 1)"
            >
              <lottie
                class="lottie"
                :options="lottieOptions[indexCard * 3 + 1]"
                @animCreated="handleAnimation($event, indexCard * 3 + 1)"
              />
              <h4 class="mt-5 primary--text text-h5">
                {{ cards[indexCard * 3 + 1].title }}
              </h4>
              <p class="text-body-1 info--text">
                {{ cards[indexCard * 3 + 1].caption }}
              </p>
            </div>
          </v-col>
          <v-col v-if="$vuetify.breakpoint.mdAndUp" class="" md="4">
            <div
              class="why_dirham_card ml-auto mr-0 px-5 pt-15"
              @mouseover="play(indexCard * 3 + 2)"
            >
              <lottie
                class="lottie"
                :options="lottieOptions[indexCard * 3 + 2]"
                @animCreated="handleAnimation($event, indexCard * 3 + 2)"
              />

              <h4 class="mt-5 primary--text text-h5">
                {{ cards[indexCard * 3 + 2].title }}
              </h4>
              <p class="text-body-1 info--text">
                {{ cards[indexCard * 3 + 2].caption }}
              </p>
            </div>
          </v-col>
        </v-row>
      </v-window-item>
    </v-window>
    <v-row v-if="$vuetify.breakpoint.mdAndUp" justify="space-between">
      <v-col md="1"> </v-col>
      <v-col class="text-right" md="2">
        <v-btn
          :disabled="indexCard < 1"
          tile
          class="bk_arrow"
          @click="previousCard"
        >
          <v-icon color="primary" class="text-h4">mdi-arrow-left</v-icon>
        </v-btn>
        <v-btn
          :disabled="indexCard > 1"
          tile
          class="bk_arrow"
          @click="nextCard()"
        >
          <v-icon color="primary" class="text-h4">mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>


<script>
import lottie from 'vue-lottie/src/lottie.vue'
import * as secure from '@/static/landing/whydirham/ai_secure.json'
import * as investment from '@/static/landing/whydirham/ai_investment.json'
import * as stable from '@/static/landing/whydirham/ai_stable.json'
import * as fast from '@/static/landing/whydirham/ai_fast.json'
import * as transparency from '@/static/landing/whydirham/ai_transparency.json'
import * as inclusive from '@/static/landing/whydirham/ai_inclusive.json'
import * as governance from '@/static/landing/whydirham/ai_governance.json'
import * as censorshipResistant from '@/static/landing/whydirham/ai_censorship_resistant.json'
import * as digitalcash from '@/static/landing/whydirham/ai_digital_cash.json'
export default {
  name: 'WhyDirham',
  components: {
    lottie,
  },
  data() {
    return {
      lottieOptions: [
        { animationData: secure.default, loop: false, autoplay: true },
        { animationData: investment.default, loop: false },
        { animationData: stable.default, loop: false },
        { animationData: fast.default, loop: false },
        { animationData: transparency.default, loop: false },
        { animationData: inclusive.default, loop: false },
        { animationData: governance.default, loop: false },
        {
          animationData: censorshipResistant.default,
          loop: false,
          autoplay: false,
        },
        { animationData: digitalcash.default, loop: false },
      ],
      indexCard: 0,
      cards: [
        {
          title: 'Secure & reliable',
          caption:
            'Dirham crypto is a blockchain-based platform, making it safe, transparent and immutable.',
          path: 'ai_secure',
          anim: null,
        },
        {
          title: 'Investment interest',
          caption:
            'Dirham crypto is currently the only stablecoin that distributes the revenues of bonds sale and other investments among Dirham holders on a weekly basis.',
          path: 'ai_investment',
          anim: null,
        },
        {
          title: 'Stable',
          caption:
            'Dirham is backed by a reserve of Fiat money which is invested in certain investment Funds. That is why its rate is always stable.',
          path: 'ai_stable',
          anim: null,
        },
        {
          title: 'Fast',
          caption:
            'Regardless of amount or destination, Dirham transactions are incredibly fast.',
          path: 'ai_fast',
          autoPlay: true,
          loop: true,
        },
        {
          title: 'Transparency',
          caption:
            "The mutual fund's capital inflow is announced transparently every day.",
          path: 'ai_transparency',
          anim: null,
        },
        {
          title: 'Inclusive and Simplified',
          caption:
            'Our brokers in all corners of the world transform your assets securely to simply transferable repo bonds guaranteed to be bought back.',
          path: 'ai_inclusive',
          anim: null,
        },
        {
          title: 'Governance',
          caption:
            'Dirham crypto is run by a decentralized organization made of Dirham holders. The DAO managers cannot issue bonds unless enough funding inflow is ensured in the mutual fund.',
          path: 'ai_governance',
          anim: null,
        },
        {
          title: 'Censorship-resistant',
          caption:
            'Dirham crypto complies with international standards and regulations while providing highly secure monetary transactions for the consumers. Unlike some stable coins e.g. Tether, the privacy policy designed by the co-founders disables creating black-lists or endangering ownership rights.',
          path: 'ai_censorship_resistant',
          anim: null,
        },
        {
          title: 'Digital cash',
          caption:
            'Dirham crypto turns cash into digital divisible, and easily tradable repo bonds. Divisibility enables Dirham crypto to equalize its units to AED to satisfy the global demand for this universal currency for international trade.',
          path: 'ai_digital_cash',
          anim: null,
        },
      ],
    }
  },
  methods: {
    handleAnimation(anim, type) {
      this.cards[type].anim = anim
    },

    stop(type) {
      const anim = this.cards[type].anim
      anim.goAndStop(anim.totalFrames - 1, true)()
    },

    play(type) {
      const anim = this.cards[type].anim
      anim.stop()
      anim.play()
    },

    pause(type) {
      this.cards[type].anim.pause()
    },
    nextCard() {
      ++this.indexCard
    },
    previousCard() {
      --this.indexCard
    },
    autoPlayOn(index) {
      this.cards[index].autoPlay = true
      this.cards[index].loop = true
    },
    autoPlayOff(index) {
      this.cards[index].autoPlay = false
    },
  },
}
</script>


<style scoped>
/* section why dirham */
.why_dirham {
  position: relative;
  background-color: #09232e;
  width: 100%;
  /* height: 480px; */

  margin-top: 240px;
}
.why_dirham_card {
  position: relative;
  width: 90%;
  min-height: 320px;
  padding-bottom: 10px;
  background: #081d26;
}
.bk_arrow {
  background: radial-gradient(
    56.83% 251.98% at 28.05% 50%,
    #0f2732 0%,
    #245569 100%
  );
}
.lottie {
  position: absolute;
  width: 100px !important;
  height: 100px !important;
  top: -50px;
  left: 10px;
}
.window_height {
  min-height: 450px !important;
}
</style>