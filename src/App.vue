<template>
  <v-app>
    <div id="menu" class="d-md-flex d-none">
      <div class="row pt-2 align-items-center">
        <div class="col-2 offset-1">
          <v-img src="./assets/logo.png" alt="" max-width="200"></v-img>
        </div>
        <div class="col-5 offset-1">
          <ul class="text-primary nav">
            <li>
              <router-link to="/" class="raleway">Home</router-link>
            </li>
            <li>
              <v-menu dark open-on-hover down >
                <template v-slot:activator="{ on, attrs }">
                  <a class="raleway" v-bind="attrs" v-on="on"> Resurce </a>
                </template>

                <v-list>
                  <v-list-item>
                    <v-list-item-title
                      ><a
                        class="raleway"
                        href="https://dirhamcrypto.io/whitepaper.pdf"
                        >white paper</a
                      ></v-list-item-title
                    >
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      ><router-link
                        
                        to="/faq"
                        target=""
                        class="raleway"
                        >FAQ</router-link
                      ></v-list-item-title
                    >
                  </v-list-item>
                </v-list>
              </v-menu>
            </li>
            <li><a href="#" class="raleway">News</a></li>
            <li>
              <router-link
                
                to="/about"
                target=""
                class="raleway"
                >About Us</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="background">
      <router-view />
      <div class="pt-10" :class="screenSize ? 'footer' : 'mobFooter'">
        <v-row>
          <v-col class="offset-1" md="2" cols="10">
            <v-img width="200" src="./assets/footer/logotype.png"></v-img>
          </v-col>
          <v-col class="offset-1" md="2" cols="10">
            <h6 class="primary--text">CONNECT</h6>
            <ul>
              <li>
                <a href="mailto:info@dirhamcrypto.io">Contact Us</a>
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
          <v-col class="offset-1 offset-md-0" md="2" cols="10">
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
          <v-col class="offset-1 offset-md-0" md="2" cols="10">
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
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  // components: {
  //   HelloWorld,
  // },

  data() {
    return {
      drawer: false,
      group: null,
      screenSize: true,
    };
  },
  
  watch: {
    group() {
      this.drawer = false;
    },
  },
  created() {
    this.screenSize = window.screen.width > 960;
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@500&display=swap");
.tenorsans {
  font-family: "Tenor Sans", sans-serif;
}
.raleway {
  font-family: "Raleway", sans-serif;
}
.kanit {
  font-family: "Kanit", sans-serif !important;
}
</style>
<style scoped>
body {
  /* font-family: "Kanit", sans-serif !important; */
  color: white !important;
}
.background {
  background-image: url("./assets/back.jpg");
  width: 100%;
  background-size: cover;
  background-attachment: fixed;
}

.section {
  /* background-image: url(../img/backgraond.jpg); */
  /* background-image: url("./assets/back.jpg"); */
  /* background-size: cover;
  background-attachment: fixed; */
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
.mobfooter {
  background-color: rgba(255, 255, 255, 0.2);
  height: 500px;
}

.footer {
  background-color: rgba(255, 255, 255, 0.2);
  height: 220px;
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
.footer {
  background-color: rgba(26, 29, 36, 0.75);
  height: 200px;
  overflow: hidden;
}
.mobFooter {
  background-color: rgba(26, 29, 36, 0.75);

  overflow: hidden;
}
</style>

