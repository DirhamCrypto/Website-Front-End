<template>
  <div class="home mt-md-15">
    <v-card
      :height="screenHeigth"
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
                ><router-link to="/" class="raleway"
                  >Home</router-link
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
                  
                  to="/about"
                  target=""
                  class="raleway"
                  >About Us</router-link
                >
                </v-list-item-title
              >
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <v-card-text>
        <v-row class="pt-15" justify="center">
          <div>
            <v-img class="text-center" src="../assets/p1/logo.png" width="150">
            </v-img>
          </div>
        </v-row>
        <v-row align="center">
          <v-col>
            <h1 class="white--text">
              <p>
                <span
                  class="text-subtitle-1 mr-2 kanit"
                  style="font-family: 'Kanit', sans-serif !important"
                  >The</span
                >
                <span
                  class="text-h4 mr-2"
                  style="font-family: 'Kanit', sans-serif !important"
                  >Rise</span
                >
                <span
                  style="font-family: 'Kanit', sans-serif !important"
                  class="text-subtitle-1 mr-2 kanit"
                  >Of</span
                >
                <span
                  style="font-family: 'Kanit', sans-serif !important"
                  class="text-h4 mr-2 kanit"
                  >Bonds</span
                >
                <span
                  style="font-family: 'Kanit', sans-serif !important"
                  class="text-subtitle-1 kanit"
                  >In</span
                >
              </p>
              <p class="pl-15">
                <span
                  style="font-family: 'Kanit', sans-serif !important"
                  class="text-subtitle-1 ml-10 mr-2 kanit"
                  >The</span
                >
                <span
                  style="font-family: 'Kanit', sans-serif !important"
                  class="text-h4 mr-2 kanit"
                  >BlockChain</span
                >
              </p>
              <p class="text-right">
                <span
                  style="font-family: 'Kanit', sans-serif !important"
                  class="white--text kanit"
                  >World</span
                >
              </p>
            </h1>
          </v-col>
        </v-row>
        <v-row class="mt-4" justify="center">
          <v-col class="text-center" cols="8">
            <v-btn
              @click="addToWallet(dirhamAddress, 'DHS')"
              width="100%"
              class="page_one_btn kanit"
              >Add Dirham to wallet</v-btn
            >
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <div class="d-md-none overflow-hidden section_gray pr-1">
      <v-row class="pt-15" justify="center">
        <div>
          <v-row class="" justify="center">
            <div>
              <v-img
                class="text-center"
                src="../assets/p2/coins.png"
                width="100"
              >
              </v-img>
            </div>
          </v-row>
        </div>
      </v-row>
      <v-row>
        <v-col class="offset-1" cols="10">
          <p class="white--text mt-15 tenorsans">
            A Dirham crypto bond is equivalent to one million UAE Dirhams (AED),
            which is in turn equal to 272294.07 US Dollars (USD). The bonds are
            initially only traded by Drachma DAO brokers in a number of
            countries around the world.
          </p>
          <p class="white--text tenorsans">
            Each bond is divisible by one million Dirham coins and is always
            equal to $0.2722 US. They can be easily traded on various exchanges
            like Uniswap.
          </p>
        </v-col>
      </v-row>

      <v-row class="my-10" justify="center">
        <div>
          <v-img
            class="text-center"
            src="../assets/p3/transparency.png"
            width="50"
          >
          </v-img>
        </div>
        <h6 class="primary--text text-h6">Transparency</h6>
        <v-col cols="10" class="offset-1">
          <p class="white--text mt-5">
            The mutual fund's capital inflow is announced transparently every
            day.
          </p>
        </v-col>
      </v-row>

      <v-row class="my-10" justify="center">
        <div>
          <v-img
            class="text-center"
            src="../assets/p3/Secure&reliable.png"
            width="50"
          >
          </v-img>
        </div>
        <h6 class="primary--text text-h6">Secure & reliable</h6>
        <v-col cols="10" class="offset-1">
          <p class="white--text mt-5">
            Dirham crypto is a blockchain-based platform, making it safe,
            transparent and immutable.
          </p>
        </v-col>
      </v-row>

      <v-row class="my-10" justify="center">
        <div>
          <v-img
            class="text-center"
            src="../assets/p3/InclusiveandSimplified.png"
            width="50"
          >
          </v-img>
        </div>
        <h6 class="primary--text text-h6">Inclusive and Simplified</h6>
        <v-col cols="10" class="offset-1">
          <p class="white--text mt-5">
            The mutual fund's capital inflow is announced transparently every
            day.
          </p>
        </v-col>
      </v-row>

      <v-row class="my-10" justify="center">
        <div>
          <v-img
            class="text-center"
            src="../assets/p3/Censorship-resistant.png"
            width="50"
          >
          </v-img>
        </div>
        <h6 class="primary--text text-h6">Censorship-resistant</h6>
        <v-col cols="10" class="offset-1">
          <p class="white--text mt-5">
            Dirham crypto complies with international standards and regulations
            while providing highly secure monetary transactions for the
            consumers. Unlike some stable coins e.g. Tether, the privacy policy
            designed by the co-founders disables creating black-lists or
            endangering ownership rights.
          </p>
        </v-col>
      </v-row>

      <v-row class="my-10" justify="center">
        <div>
          <v-img
            class="text-center"
            src="../assets/p3/Investmentinterest.png"
            width="50"
          >
          </v-img>
        </div>
        <h6 class="primary--text text-h6">Investment interest</h6>
        <v-col cols="10" class="offset-1">
          <p class="white--text mt-5">
            Dirham crypto is currently the only stablecoin that distributes the
            revenues of bonds sale and other investments among Dirham holders on
            a weekly basis.
          </p>
        </v-col>
      </v-row>

      <v-row class="my-10" justify="center">
        <div>
          <v-img
            class="text-center"
            src="../assets/p3/Digitalcash.png"
            width="50"
          >
          </v-img>
        </div>
        <h6 class="primary--text text-h6">Digital cash</h6>
        <v-col cols="10" class="offset-1">
          <p class="white--text mt-5">
            Dirham crypto turns cash into digital divisible, and easily tradable
            repo bonds. Divisibility enables Dirham crypto to equalize its units
            to AED to satisfy the global demand for this universal currency for
            international trade.
          </p>
        </v-col>
      </v-row>

      <v-row class="pt-15 mb-5" justify="center">
        <v-col class="offset-1" cols="10">
          <h4 class="white--text text-h6">
            Dirham is mainly used by the following three communities:
          </h4>
        </v-col>
      </v-row>

      <v-row class="my-10" justify="center">
        <div>
          <v-img class="text-center" src="../assets/p4/Traders.png" width="50">
          </v-img>
        </div>
        <h6 class="primary--text text-h6">Traders</h6>
        <v-col cols="10" class="offset-1">
          <p class="white--text mt-5">
            Traders use it as a stablecoin to exchange their daily trades and
            earn profits periodically. There is no fund-freezing or similar
            limitation like Tether or other stablecoins.
          </p>
        </v-col>
      </v-row>

      <v-row class="my-10" justify="center">
        <div>
          <v-img
            class="text-center"
            src="../assets/p4/Individuals.png"
            width="50"
          >
          </v-img>
        </div>
        <h6 class="primary--text text-h6">Individuals</h6>
        <v-col cols="10" class="offset-1">
          <p class="white--text mt-5">
            Dirham adoption enables individuals to use it as a payment method
            and earn weekly profits.
          </p>
        </v-col>
      </v-row>

      <v-row class="my-10" justify="center">
        <div>
          <v-img
            class="text-center"
            src="../assets/p4/Merchants.png"
            width="50"
          >
          </v-img>
        </div>
        <h6 class="primary--text text-h6">Merchants</h6>
        <v-col cols="10" class="offset-1">
          <p class="white--text mt-5">
            Businessmen use Dirham for unlimited, lower-fee and faster
            international transactions.
          </p>
        </v-col>
      </v-row>

      <v-row class="my-10" justify="center">
        <div>
          <v-img
            class="text-center"
            src="../assets/p4/bondholder.png"
            width="50"
          >
          </v-img>
        </div>
        <h6 class="primary--text text-h6">Bond Holders</h6>
        <v-col cols="10" class="offset-1">
          <p class="white--text mt-5">
            The main advantage of Dirham Crypto bonds over other bonds is the
            divisibility and simplicity in transfer. This feature enables banks
            and investment companies to use our bonds more efficiently.
          </p>
        </v-col>
      </v-row>

      <v-row class="mt-15" justify="center">
        <div>
          <v-img class="text-center" src="../assets/p5/dorlogo.png" width="250">
          </v-img>
        </div>

        <v-col cols="10" class="offset-1">
          <p class="white--text mt-5">
            Drachma is a decentralized autonomous organization aiming to create
            Stablecoins and has already created Dirham as the first creation.
            All activities and decisions are made by the DAO members. Anyone who
            holds Dor can contribute to Drachma DAO.
          </p>
        </v-col>
      </v-row>
      <v-row class="" justify="center">
        <v-col class="text-center" cols="8">
          <v-btn
            @click="addToWallet(dorAddress, 'DOR')"
            class="page_one_btn"
            width="100%"
            >Add Dor to wallet</v-btn
          >
        </v-col>
      </v-row>
      <v-row class="pt-15">
        <v-col cols="10" class="offset-1">
          <h4 class="white--text">You can also EXCHANGE with these...</h4>
        </v-col>
      </v-row>
      <v-row class="mt-5" justify="center">
        <div class="mb-10">
          <a href="https://app.uniswap.org/#/swap" target="_blank">
            <v-img width="200" class="hexgon" src="../assets/p6/hexagon.svg">
              <div>
                <v-img
                  class="childpic"
                  width="100"
                  src="../assets/p6/uniswap.png"
                ></v-img>
              </div>
            </v-img>
          </a>
        </div>
      </v-row>
    </div>

    <full-page
      v-if="screenSize"
      class="d-none d-md-block"
      ref="fullpage"
      :options="options"
      id="fullpage"
    >
      <div class="section">
        <v-container class="pb-15 mt-n10" fluid fill-height style="max-width:100%;">
          

        <v-row align="center" >
          <v-col align-self="center" cols="5" class="offset-md-1">
            <v-row >
              <h1 class="white--text">
                <p>
                  <span
                    class="text-h6 mr-2 kanit"
                    style="font-family: 'Kanit', sans-serif !important"
                    >The</span
                  >
                  <span
                    class="text-h3 mr-2"
                    style="font-family: 'Kanit', sans-serif !important"
                    >Rise</span
                  >
                  <span
                    style="font-family: 'Kanit', sans-serif !important"
                    class="text-h6 mr-2 kanit"
                    >Of</span
                  >
                  <span
                    style="font-family: 'Kanit', sans-serif !important"
                    class="text-h3 mr-2 kanit"
                    >Bonds</span
                  >
                  <span
                    style="font-family: 'Kanit', sans-serif !important"
                    class="text-h6 kanit"
                    >In</span
                  >
                </p>
                <p class="pl-15">
                  <span
                    style="font-family: 'Kanit', sans-serif !important"
                    class="text-h6 ml-10 mr-2 kanit"
                    >The</span
                  >
                  <span
                    style="font-family: 'Kanit', sans-serif !important"
                    class="text-h3 mr-2 kanit"
                    >BlockChain</span
                  >
                </p>
                <p class="text-right">
                  <span
                    style="font-family: 'Kanit', sans-serif !important"
                    class="white--text kanit"
                    >World</span
                  >
                </p>
              </h1>
            </v-row>
            <v-row>
              <h2 class="white--text">
                <p>
                  <span
                    style="font-family: 'Kanit', sans-serif !important"
                    class="text-h5"
                    >SIMPLE</span
                  >
                  <span
                    style="font-family: 'Kanit', sans-serif !important"
                    class="mx-3"
                    >&</span
                  >
                </p>
                <p class="ml-5 mt-n5">
                  <span
                    style="font-family: 'Kanit', sans-serif !important"
                    class="ml-4 text-h5"
                    >UNIVERSAL</span
                  >
                </p>
              </h2>
            </v-row>
          </v-col>
          <v-col cols="6">
            <v-row class="pt-15" justify="center">
              <div>
                <v-img
                  class="text-center"
                  src="../assets/p1/logo.png"
                  width="250"
                >
                </v-img>
              </div>
            </v-row>
            <v-row class="mt-10" justify="center">
              <!-- <v-col class="text-center" cols="5">
                <v-btn width="100%" class="page_one_btn kanit">Donate</v-btn>
              </v-col> -->
            </v-row>
            <v-row class="my-n4" justify="center">
              <v-col class="text-center" cols="5">
                <v-btn
                  @click="addToWallet(dirhamAddress, 'DHS')"
                  width="100%"
                  class="page_one_btn kanit"
                  >Add Dirham to wallet</v-btn
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        </v-container>

      </div>
      <div class="section section_p2">
        <v-container class="pb-15 mt-n10" fluid fill-height style="max-width:100%;">
        <v-row class="pt-15">
          <v-col cols="2" class="offset-3">
            <div>
              <v-img width="200" src="../assets/p2/coins.png"></v-img>
            </div>
          </v-col>
          <v-col class="pt-15" align-self="center" cols="3">
            <p class="white--text mt-15 tenorsans">
              A Dirham crypto bond is equivalent to one million UAE Dirhams
              (AED), which is in turn equal to 272294.07 US Dollars (USD). The
              bonds are initially only traded by Drachma DAO brokers in a number
              of countries around the world.
            </p>
            <p class="white--text tenorsans">
              Each bond is divisible by one million Dirham coins and is always
              equal to $0.2722 US. They can be easily traded on various
              exchanges like Uniswap.
            </p>
          </v-col>
        </v-row>
        </v-container>
      </div>

      <div class="section section_gray">
        <v-container class="pb-15 mt-n10" fluid fill-height style="max-width:100%;">
          <v-row class="pt-15 text-caption">
            <v-col class="offset-1" cols="3">
              <v-row align="center">
                <div>
                  <v-img width="50" src="../assets/p3/transparency.png"></v-img>
                </div>
                <h6 class="primary--text text-h6 mx-2">Transparency</h6>
                <p class="white--text mt-5">
                  The mutual fund's capital inflow is announced transparently
                  every day.
                </p>
              </v-row>
            </v-col>
            <v-col class="ml-10" cols="3">
              <v-row align="center">
                <div>
                  <v-img
                    width="50"
                    src="../assets/p3/Secure&reliable.png"
                  ></v-img>
                </div>
                <h6 class="primary--text text-h6 mx-2">Secure & reliable</h6>
                <p class="white--text mt-5">
                  Dirham crypto is a blockchain-based platform, making it safe,
                  transparent and immutable.
                </p>
              </v-row>
            </v-col>
            <v-col class="ml-10" cols="3">
              <v-row align="center">
                <div>
                  <v-img
                    width="50"
                    src="../assets/p3/InclusiveandSimplified.png"
                  ></v-img>
                </div>
                <h6 class="primary--text text-h6 mx-2">
                  Inclusive and Simplified
                </h6>
                <p class="white--text mt-5">
                  Our brokers in all corners of the world transform your assets securely to simply transferable repo bonds guaranteed to be bought back.
                </p>
              </v-row>
            </v-col>
          </v-row>
          <v-row class="text-caption mt-5">
            <v-col class="offset-1" cols="3">
              <v-row align="center">
                <div>
                  <v-img width="50" src="../assets/p3/Governance.png"></v-img>
                </div>
                <h6 class="primary--text text-h6 mx-2">Governance</h6>
                <p class="white--text mt-5">
                  Dirham crypto is run by a decentralized organization made of
                  Dirham holders. The DAO managers cannot issue bonds unless
                  enough funding inflow is ensured in the mutual fund.
                </p>
              </v-row>
            </v-col>
            <v-col class="ml-10" cols="3">
              <v-row align="center">
                <div>
                  <v-img
                    width="50"
                    src="../assets/p3/Censorship-resistant.png"
                  ></v-img>
                </div>
                <h6 class="primary--text text-h6 mx-2">Censorship-resistant</h6>
                <p class="white--text mt-5">
                  Dirham crypto complies with international standards and
                  regulations while providing highly secure monetary transactions
                  for the consumers. Unlike some stable coins e.g. Tether, the
                  privacy policy designed by the co-founders disables creating
                  black-lists or endangering ownership rights.
                </p>
              </v-row>
            </v-col>
            <v-col class="ml-10" cols="3">
              <v-row align="center">
                <div>
                  <v-img
                    width="50"
                    src="../assets/p3/Investmentinterest.png"
                  ></v-img>
                </div>
                <h6 class="primary--text text-h6 mx-2">Investment interest</h6>
                <p class="white--text mt-5">
                  Dirham crypto is currently the only stablecoin that distributes
                  the revenues of bonds sale and other investments among Dirham
                  holders on a weekly basis.
                </p>
              </v-row>
            </v-col>
          </v-row>
          <v-row class="text-caption">
            <v-col class="offset-1" cols="3">
              <v-row align="center">
                <div>
                  <v-img width="50" src="../assets/p3/Digitalcash.png"></v-img>
                </div>
                <h6 class="primary--text text-h6 mx-2 mt-4">Digital cash</h6>
                <p class="white--text mt-5">
                  Dirham crypto turns cash into digital divisible, and easily
                  tradable repo bonds. Divisibility enables Dirham crypto to
                  equalize its units to AED to satisfy the global demand for this
                  universal currency for international trade.
                </p>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div class="section section_gray">
        
        <v-container  fluid fill-height style="max-width:100%;">
          <v-row class="mt-15" align="start" justify="center">
            <h4 class="white--text">Dashboard</h4>
          </v-row>
          <v-row align="start">
            <v-col class="offset-1" cols="5">
              <v-row>
                <v-col cols="6">
                  <p class="text-justify font2rem white--text tenorsans">Max Total Suply:</p>
                  <p class="text-justify font2rem white--text tenorsans">Repo Bonds Size:</p>
                  <p class="text-justify font2rem white--text tenorsans">Market Overview:</p>
                </v-col>
                <v-col class="offset-1" cols="5">
                  <p class=" white--text font2rem tenorsans"> 10,000,000 DHS</p>
                  <p class=" white--text font2rem tenorsans"> 1,000,000 DHS</p>
                  <p class=" white--text font2rem tenorsans"> 3.6 DHS</p>
                </v-col>
              </v-row>
            </v-col>
            <v-col class="offset-1" cols="3">
              <v-row>
                <v-col cols="9">
                  <p class="white--text font2rem tenorsans">Circulating Supply:</p> 
                </v-col>
                <v-col cols="3">
                  <p class="text-right white--text font2rem tenorsans">55%</p>

                </v-col>
              </v-row>
              <v-img src="../assets/p4/55.png"></v-img>
            </v-col>

          </v-row>
          <v-row>
            <v-col class="offset-1" cols="3">
              <v-btn class="font2rem" height="110%" color="primary" outlined>1USDT = 3.6 DIRHAM</v-btn>  
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div class="section section_gray">
        <v-container class="pb-15 mt-n10" fluid fill-height style="max-width:100%;">
        <v-row  justify="center">
          <h4 class="white--text text-h6">
            Dirham is mainly used by the following three communities:
          </h4>
        </v-row>
        <v-row class="text-caption" justify="space-around">
          <v-col cols="3">
            <v-row align="center">
              <div>
                <v-img width="50" src="../assets/p4/Traders.png"></v-img>
              </div>
              <h6 class="primary--text text-h6 mx-2 mt-4">Traders</h6>
            </v-row>
            <v-row>
              <p class="white--text mt-5">
                Traders use it as a stablecoin to exchange their daily trades
                and earn profits periodically. There is no fund-freezing or
                similar limitation like Tether or other stablecoins.
              </p>
            </v-row>
          </v-col>
          <v-col cols="3">
            <v-row align="center">
              <div>
                <v-img width="50" src="../assets/p4/Individuals.png"></v-img>
              </div>
              <h6 class="primary--text text-h6 mx-2 mt-4">Individuals</h6>
            </v-row>
            <v-row>
              <p class="white--text mt-5">
                Dirham adoption enables individuals to use it as a payment
                method and earn weekly profits.
              </p>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="text-caption" justify="space-around">
          <v-col cols="3">
            <v-row align="center">
              <div>
                <v-img width="50" src="../assets/p4/Merchants.png"></v-img>
              </div>
              <h6 class="primary--text text-h6 mx-2 mt-4">Merchants</h6>
            </v-row>
            <v-row>
              <p class="white--text mt-5">
                Businessmen use Dirham for unlimited, lower-fee and faster
                international transactions.
              </p>
            </v-row>
          </v-col>
          <v-col cols="3">
            <v-row align="center">
              <div>
                <v-img width="50" src="../assets/p4/bondholder.png"></v-img>
              </div>
              <h6 class="primary--text text-h6 mx-2 mt-4">Bond Holders</h6>
            </v-row>
            <v-row>
              <p class="white--text mt-5">
                The main advantage of Dirham Crypto bonds over other bonds is
                the divisibility and simplicity in transfer. This feature
                enables banks and investment companies to use our bonds more
                efficiently.
              </p>
            </v-row>
          </v-col>
        </v-row>
        </v-container>
      </div>
      <div class="section section_gray">
        <v-container class="pb-15 mt-n10" fluid fill-height style="max-width:100%;">
        <v-row class="pt-15" justify="space-around">
          <v-col cols="3">
            <div>
              <v-img src="../assets/p5/dorlogo.png"></v-img>
            </div>
          </v-col>
          <v-col cols="4">
            <h5 class="white--text text-body-1">
              Drachma is a decentralized autonomous organization aiming to
              create Stablecoins and has already created Dirham as the first
              creation. All activities and decisions are made by the DAO
              members. Anyone who holds Dor can contribute to Drachma DAO.
            </h5>
          </v-col>
        </v-row>
        <v-row class="pt-15 mt-10" justify="center">
          <v-col cols="3">
            <v-btn
              @click="addToWallet(dorAddress, 'DOR')"
              class="page_one_btn"
              width="100%"
              >Add Dor to wallet</v-btn
            >
          </v-col>
        </v-row>
        </v-container>
      </div>
      <div class="section section_gray endpage">
        <v-row class="pt-15"></v-row>
        <v-row class="pt-15" justify="center">
          <h4 class="white--text">
            You can also EXCHANGE with these...
          </h4>
        </v-row>
        <v-row class="mt-5" justify="center">
          <div class="mb-10">
            <a href="https://app.uniswap.org/#/swap" target="_blank">
              <v-img width="200" class="hexgon" src="hexagon.svg">
                <div>
                  <v-img
                    class="childpic"
                    width="100"
                    src="../assets/p6/uniswap.png"
                  ></v-img>
                </div>
              </v-img>
            </a>
          </div>
        </v-row>

        <div v-if="screenSize" class="footer">
          <v-row>
            <v-col class="offset-1" cols="2">
              <v-img width="200" src="../assets/footer/logotype.png"></v-img>
            </v-col>
            <v-col class="offset-1" cols="2">
              <h6 class="primary--text">CONNECT</h6>
              <ul>
                <li>
                  <a class="primary--text" href="mailto:info@dirhamcrypto.io"
                    >Contact Us</a
                  >
                </li>
                <!-- <li><a class="white--text" href="">Media Contact</a></li> -->
                <li>
                  <a href="https://twitter.com/DirhamCrypto">Twitter</a>
                </li>
                <!-- <li><a class="white--text" href="">Facebook</a></li> -->
                <!-- <li><a class="white--text" href="">Telegram</a></li> -->
                <!-- <li><a class="white--text" href="">LinkedIn</a></li> -->
              </ul>
            </v-col>
            <v-col cols="2">
              <h6 class="primary--text">RESOURCES</h6>
              <ul>
                <li>
                  <a class="" href="/whitepaper.pdf">Whitepaper</a>
                </li>
                <li>
                  <router-link
                    to="/faq"
                    target=""
                    
                    >FAQ
                  </router-link>
                </li>
              </ul>
            </v-col>
            <v-col cols="2">
              <h6 class="primary--text">ABOUT</h6>
              <ul>
                <li>
                  <router-link
                    to="/about"
                    target=""
                    >About Us</router-link
                  >
                </li>
              </ul>
            </v-col>
          </v-row>
        </div>
      </div>
    </full-page>
  </div>
</template>

<script>
// @ is an alias to /src
const Web3 = require("web3");

export default {
  name: "Home",
  watch: {
    group() {
      this.drawer = false;
    },
  },

  data() {
    return {
      screenSize: false,
      screenHeigth: 0,
      drawer: false,
      group: null,
      dirhamAddress: "0x30365ed4ca8173013ad948b9842f34ac71d01f7c",
      dorAddress: "0x53608f7258671fe607151e7df5efaf96e130f937",
      options: {
        // navigation: true,
        // showActiveTooltip: true,
        verticalCentered: true,
        // anchors: [
        //   "page1",
        //   "page2",
        //   "page3",
        //   "page4",
        //   "page5",
        //   "page6",
        //   "page7",
        // ],
        // sectionsColor: ["#41b883", "#ff5f45", "#0798ec"],
      },
    };
  },
  created() {
    this.screenSize = window.screen.width > 960;

    this.screenHeigth = window.screen.height;
  },
  methods: {
    sendEmail: {
      function() {
        window.open("info@dirhamcrypto.com");
      },
    },
    addToWallet: function (address, iSymbol) {
      var web3;
      const ethereum = window.ethereum;
      if (typeof ethereum !== "undefined") {
        web3 = new Web3(ethereum);
      } else if (typeof web3 !== "undefined") {
        web3 = new Web3(web3.currentProvider);
      } else {
        alert("No web3 provider");
        return;
      }
      var network = 0;
      const net = "mainnet";
      console.log(web3);
      web3.eth.net.getId((err, netId) => {
        network = netId.toString();
        switch (network) {
          case "1":
            network = "mainnet";
            break;
          case "2":
            network = "morden";
            break;
          case "3":
            network = "ropsten";
            break;
          case "4":
            network = "rinkeby";
            break;
          case "5":
            network = "goerli";
            break;
          case "42":
            network = "kovan";
            break;
          case "246":
            network = "ecw";
            break;
          default:
            console.log("This is an unknown network.");
        }
        if (network.toLowerCase() !== net.toLowerCase()) {
          alert("Please connect to " + net + " network your on on " + network);
          return false;
        } else {
          try {
            web3.currentProvider.sendAsync(
              {
                method: "wallet_watchAsset",
                params: {
                  type: "ERC20",
                  options: {
                    address: address,
                    symbol: iSymbol,
                    decimals: 18,
                  },
                },
                id: Math.round(Math.random() * 100000),
              },
              function (err, data) {
                if (!err) {
                  if (data.result) {
                    console.log("Token added");
                  } else {
                    console.log(data);
                    console.log("Some error");
                  }
                } else {
                  console.log(err.message);
                }
              }
            );
          } catch (e) {
            console.log(e);
          }
        }
      });
    },
  },
};
</script>
<style scoped>
body {
  /* font-family: "Kanit", sans-serif !important; */
  color: white !important;
  background-image: url("https://cdn.vuetifyjs.com/images/parallax/material.jpg");
}
.background {
  background-image: url("../assets/back.jpg") !important;
  background-size: cover;
  background-attachment: fixed;
}

#menu {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 70;
  width: 100%;
  background-color: black;
}

.nav li {
  display: inline-block;
  margin: 0 20px;
}

.card-out-line {
  border-radius: 10px;
  border: 3px solid #f9d153;
}

.hr-border {
  border: 1px solid white;
}

.card-exchange {
  background-color: rgba(255, 255, 255, 0.2);
  height: 120px;
  padding: 10px 100px;
}

.exchange-item {
  height: 100%;
}

.copy-right {
  background-color: #f9d153;
  height: 50px;
}

.text-black {
  color: black;
}

.header-title {
  font-weight: 300;
}

.title-page {
  font-size: 4vw !important;
  font-family: "Kanit";
  font-weight: 700 !important;
}

.subtitle-page {
  font-weight: 300;
  font-size: 2vw;
}

.btn-text {
  font-family: "Kanit";
  color: black !important;
  font-weight: 700 !important;
}

.caption-page {
  font-size: 20px !important;
  font-family: "Tenor Sans", sans-serif;
}

.tenor-font {
  font-family: "Tenor Sans", sans-serif !important;
}

.price-title {
  font-family: "Tenor Sans", sans-serif !important;
  font-size: 2vw !important;
}

.price {
  font-family: "Tenor Sans", sans-serif !important;
  font-size: 3vw !important;
}
.page_one_btn {
  background-color: rgba(255, 255, 255, 0.6) !important;
}
.section_p2 {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 212, 255, 0) 100%
  );
}
.section_gray {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 10%,
    rgba(0, 0, 0, 0.5) 90%,
    rgba(0, 0, 0, 0) 100%
  );
}
.hexgon {
  opacity: 50%;
  position: relative !important;
}
.childpic {
  position: absolute !important;
  right: 50px !important;
  bottom: 50px !important;
}
.footer {
  background-color: rgba(26, 29, 36, 0.75);
  height: 200px;
  width: 100%;
  padding-top: 15px;
  position: absolute;
  bottom: 0px;
}
.mobFooter {
  background-color: rgba(26, 29, 36, 1);
  height: 200px;
  width: 100%;
  padding-top: 15px;
  position: absolute;
  bottom: 0px;
}
.endpage {
  position: relative;
}
.hidden_card {
  background-color: none !important;
  box-shadow: none;
}
.font2rem{
  font-size: 2rem !important;
}
</style>

