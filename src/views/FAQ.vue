<template>
  <div  class="faq">
    <div  class="d-md-none">
      <v-card
        :height="[drawer ? screenHeigth : 70]"
        class="d-md-none"
        style="background: none; box-shadow: none"
      >
        <v-app-bar color="secondary" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </v-app-bar>

      <v-navigation-drawer
        style="background-color: #dbb637"
        v-model="drawer"
        absolute
        bottom
        temporary
      >
        <v-list nav dense>
          <v-list-item-group v-model="group">
            <v-list-item style="background-color: black">
              <v-list-item-title class="text-center"
                ><a href="/" @click="location.reload()" class="raleway"
                  >Home</a
                ></v-list-item-title
              >
            </v-list-item>

            <v-list-item style="background-color: black">
              <v-list-item-title class="text-center"
                ><a
                  class="raleway"
                  href="https://dirhamcrypto.io/whitepaper.pdf"
                  >white paper</a
                ></v-list-item-title
              >
            </v-list-item>

            <v-list-item style="background-color: black">
              <v-list-item-title class="text-center"
                ><router-link
                  onclick="window.location.reload(true)"
                  to="/faq"
                  target=""
                  class="raleway"
                  >FAQ</router-link
                ></v-list-item-title
              >
            </v-list-item>

            <v-list-item style="background-color: black">
              <v-list-item-title class="text-center"
                ><a href="#" class="raleway">News</a></v-list-item-title
              >
            </v-list-item>
            <v-list-item style="background-color: black">
              <v-list-item-title class="text-center"
                >
                <router-link
                  onclick="window.location.reload(true)"
                  to="/about"
                  target=""
                  class="raleway"
                  >About us</router-link
                >
                </v-list-item-title
              >
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

        
      </v-card>
    </div>

    <div class="overflow-x-hidden mt-md-15">
      <v-row justify="center" class="mt-md-15">
        <v-col cols="3" class="text-center">
          <h3 class="text-white">FAQ</h3>
        </v-col>
      </v-row>
      
      <v-row class="mt-5">
        <v-col class="offset-1" cols="10" md="8">
          <h5 class="text-white kanit">What is Dirham Crypto?</h5>
          <p class="text-justify text-white tenorsans">
            Dirham Crypto introduces REPO bonds into blockchain ecosystem.
            Everyone can purchase and repurchase agreement bonds and earn
            annual profit without staking funds in blockchain environment.
            The bonds are initially only traded by Drachma DAO brokers in a
            number of countries around the world.
          </p>
        </v-col>
      </v-row>
      <v-row class="my-5">
        <v-col class="offset-1" cols="10" md="8">
          <h5 class="text-white kanit">What is Dirham?</h5>
          <p class="text-justify white--text tenorsans">
            Dirham is a fully backed stablecoin whose value is pegged to the AED.
            The DHS token lives on the Ethereum and Tron blockchains. Dirham is
            used in the same manner as any other cryptocurrency: It can be freely
            sent to others, used as payments for goods and services, held as a
            hedge against market volatility, etc.
          </p>
        </v-col>
      </v-row>
      <v-row class="my-5">
        <v-col class="offset-1" cols="10" md="8">
          <h5 class="text-white kanit">
            Which real-world currencies does Dirham Crypto support as collateral?
          </h5>
          <p class="text-justify white--text tenorsans">
            Dirham Crypto supports the United Arab Emirates dirham (DHS), Euros
            (EUR), US dollar (USD), and other official currencies and some
            stablecoins such as Dai and Tether.
          </p>
        </v-col>
      </v-row>
      <v-row class="my-5">
        <v-col class="offset-1" cols="10" md="8">
          <h5 class="text-white kanit">Who can use Dirham?</h5>
          <p class="text-justify white--text tenorsans">
            Dirham Crypto enables businesses – including exchanges, wallets,
            payment processors, financial services – to easily use fiat currencies
            on blockchains.
          </p>
        </v-col>
      </v-row>
      <v-row class="my-5">
        <v-col class="offset-1" cols="10" md="8">
          <h5 class="text-white kanit">How do I know Dirham is secure?</h5>
          <p class="text-justify white--text tenorsans">
            Dirham is built on top of a secure open blockchain. All Dirham tokens
            are pegged at 1-to-1 with the United Arab Emirates dirham (DHS) and
            are backed 100% by Dirham’s reserves.
          </p>
        </v-col>
      </v-row>
      <v-row class="my-5">
        <v-col class="offset-1" cols="10" md="8">
          <h5 class="text-white kanit">Where can I use Dirham?</h5>
          <p class="text-justify white--text tenorsans">
            Dirham is usable wherever digital currencies are usable and in many
            places where digital currencies are not currently accepted.
          </p>
        </v-col>
      </v-row>
      <v-row class="my-5">
        <v-col class="offset-1" cols="10" md="8">
          <h5 class="text-white kanit">Is KYC needed?</h5>
          <p class="text-justify white--text tenorsans">
            Going through our “Know Your Customer” (KYC) form and approval process
            is required to issue and redeem Dirhams.
          </p>
        </v-col>
      </v-row>
      <v-row class="my-5">
        <v-col class="offset-1" cols="10" md="8">
          <h5 class="text-white kanit">What is Governance?</h5>
          <p class="text-justify white--text tenorsans">
            Governance is the process of interaction and decision-making among the
            stakeholders of a given system or organization. It also refers to the
            way rules, norms and actions are structured, sustained, regulated and
            upheld.
          </p>
        </v-col>
      </v-row>
      <v-row class="my-5">
        <v-col class="offset-1" cols="10" md="8">
          <h5 class="text-white kanit">What is DrachmaDAO?</h5>
          <p class="text-justify white--text tenorsans">
            Drachma is a decentralized autonomous organization aiming to create
            stablecoins, which has already created Dirham as its first creation.
          </p>
        </v-col>
      </v-row>
      <v-row class="my-5">
        <v-col class="offset-1" cols="10" md="8">
          <h5 class="text-white kanit">What is Dor?</h5>
          <p class="text-justify white--text tenorsans">
            Dor is an ERC-20 token that is native to the DrachmaDAO.
          </p>
        </v-col>
      </v-row>
      <v-row class="my-5">
        <v-col class="offset-1" cols="10" md="8">
          <h5 class="text-white kanit">What is the Dor token used for?</h5>
          <p class="text-justify white--text tenorsans">
            Dor is the governance token; whoever holds Dor can participate in
            DrachmaDAO.
          </p>
        </v-col>
      </v-row>
      <v-row class="my-5">
        <v-col class="offset-1" cols="10" md="8">
          <h5 class="text-white kanit">How much Dor is there?</h5>
          <p class="text-justify white--text tenorsans">
            The total supply is 1,000,000 tokens which will be distributed among
            individuals based on the core team members’ decision.
          </p>
        </v-col>
      </v-row>
      <v-row class="my-5">
        <v-col class="offset-1" cols="10" md="8">
          <h5 class="text-white kanit">
            What does one need to do to be eligible to receive the interest?
          </h5>
          <p class="text-justify white--text tenorsans">
            All one needs to do is holding Dirham in his/her wallet. Bond APY is
            divided into 52 weeks and the interest is paid every weekend on
            Sundays.
          </p>
        </v-col>
      </v-row>
      <v-row class="my-5">
        <v-col class="offset-1" cols="10" md="8">
          <h5 class="text-white kanit">
            Is the interest always paid on a weekly basis?
          </h5>
          <p class="text-justify white--text tenorsans">
            Yes, but this can change in the future based on DAO managers’
            decision, and it may be paid in shorter periods.
          </p>
        </v-col>
      </v-row>
      <v-row class="my-5">
        <v-col class="offset-1" cols="10" md="8">
          <h5 class="text-white kanit">How is the interest rate calculated?</h5>
          <p class="text-justify white--text tenorsans">
            The interest is calculated based on the amount of the profit earned by
            the mutual fund. The more profit the mutual fund earns, the higher
            rate the interest gets.
          </p>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      screenSize: false,
      screenHeigth: 0,
      drawer: false,
      group: null,
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
  created() {
    this.screenSize = window.screen.width > 960;

    this.screenHeigth = window.screen.height;
  },
};
</script>

<style scoped>
.faq {
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