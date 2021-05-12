<template>
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
          <v-list-item to="./" style="background-color: black">
            <v-list-item-title class="text-center">
              <router-link to="./" class="raleway">Home</router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item
            @click="openTab('https://dirhamcrypto.io/whitepaper.pdf')"
            style="background-color: black"
          >
            <v-list-item-title class="text-center"
              ><a class="raleway" href="https://dirhamcrypto.io/whitepaper.pdf"
                >white paper</a
              ></v-list-item-title
            >
          </v-list-item>

          <v-list-item to="/faq" style="background-color: black">
            <v-list-item-title class="text-center"
              ><router-link to="/faq" target="" class="raleway"
                >FAQ</router-link
              ></v-list-item-title
            >
          </v-list-item>

          <v-list-item to="/about" style="background-color: black">
            <v-list-item-title class="text-center">
              <router-link to="/about" target="" class="raleway"
                >About Us</router-link
              >
            </v-list-item-title>
          </v-list-item>
          <v-list-item
            @click="openTab('https://twitter.com/DirhamCrypto')"
            style="background-color: black"
          >
            <v-list-item-title class="text-center"
              ><a class="raleway" href="https://twitter.com/DirhamCrypto"
                >Twitter</a
              ></v-list-item-title
            >
          </v-list-item>
          <v-list-item
            @click="('https://t.me/joinchat/TKDdLuLWsBBlYmE0')"
            style="background-color: black"
          >
            <v-list-item-title class="text-center"
              ><a class="raleway" href="https://t.me/joinchat/TKDdLuLWsBBlYmE0"
                >Telegram</a
              ></v-list-item-title
            >
          </v-list-item>
          <v-list-item
            @click="openTab('https://github.com/DirhamCrypto')"
            style="background-color: black"
          >
            <v-list-item-title class="text-center"
              ><a
                href="https://github.com/DirhamCrypto"
                target="_blank"
                class="raleway"
              >
                <v-icon color="primary">mdi-github</v-icon> Github
              </a></v-list-item-title
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: "MobileNavigation",
  props: ["screenProps"],

  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  methods: {
    openTab(url) {
      window.open(
        url,
        "_blank" // <- This is what makes it open in a new window.
      );
    },
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
  created() {
    this.screenSize = window.screen.width > 960;

    this.screenHeigth = window.innerHeight;
  },
  updated() {
    this.screenHeigth = window.innerHeight;
  },
};
</script>

<style scoped>
</style>