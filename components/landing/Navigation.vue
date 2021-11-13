<template>
  <v-row align="center" class="pt-5">
    <v-col align-self="center" md="2" cols="10" class="pl-md-10 pl-5">
      <!-- <DhsLogo /> -->
      <h1 class="header-title d-md-none text-h6">DIRHAM CRYPTO</h1>
      <img class="d-md-flex d-none" src="/header-logo.svg" alt="" />
    </v-col>
    <v-col md="8" align-self="center" class="d-md-flex d-none">
      <v-menu
        v-for="(item, index) in navigationItems"
        :key="index"
        bottom
        offset-y
      >
        <template #activator="{ on, attrs }">
          <a
            :class="[index > 0 ? 'mx-2' : '']"
            class="secondary--text"
            v-bind="attrs"
            v-on="on"
          >
            {{ item.title }}
            <v-icon class="secondary--text ml-n1">mdi-chevron-down</v-icon>
          </a>
        </template>

        <v-list>
          <v-list-item
            v-for="(subitem, subindex) in item.subitems"
            :key="subindex"
          >
            <v-list-item-title class="hoverPointer">{{
              subitem.title
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-col>
    <v-col class="text-center offset-md-0" align-self="center" cols="2">
      <v-btn tile elevation="0" class="navigation-btn">
        <img
          class="d-md-none navigation-btn"
          src="/landing/menu-icon.png"
          alt=""
        />
      </v-btn>
      <div class="d-md-flex d-none">
        <v-menu bottom offset-y>
          <template #activator="{ on, attrsa }">
            <v-btn
              elevation="0"
              tile
              color="success"
              class="secondary--text"
              v-bind="attrsa"
              v-on="on"
            >
              <img class="mr-2" src="@/assets/landing/Union.png" alt="" />
              {{ languages[language] }}
              <v-icon class="secondary--text ml-n1">mdi-chevron-down</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="(item, index) in languages" :key="index">
              <v-list-item-title
                class="hoverPointer"
                @click="setLanguage(index)"
              >
                {{ item }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-col>
  </v-row>
</template>


<script>
export default {
  components: {},
  data: () => ({
    language: 0,
    languages: ['EN', 'CH', 'AR', 'TR'],
    navigationItems: [
      {
        title: 'Get Started',
        subitems: [{ title: 'a' }, { title: 'b' }, { title: 'c' }],
      },
      {
        title: 'Dirham',
        subitems: [{ title: 'a' }, { title: 'b' }, { title: 'c' }],
      },
      {
        title: 'Products',
        subitems: [{ title: 'a' }, { title: 'b' }, { title: 'c' }],
      },
      {
        title: 'Developers',
        subitems: [{ title: 'a' }, { title: 'b' }, { title: 'c' }],
      },
      {
        title: 'Blog',
        subitems: [{ title: 'a' }, { title: 'b' }, { title: 'c' }],
      },
    ],
  }),
  methods: {
    setLanguage(num) {
      this.language = num
    },
  },
}
</script>

<style scoped>
.hoverPointer:hover {
  cursor: pointer;
}
.header-title {
  background: linear-gradient(
    90.08deg,
    #ffea94 0.06%,
    #fff1ba 18.27%,
    #ffea95 51.13%,
    #fff6d0 73.3%,
    #ffea94 99.93%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.navigation-btn {
  background: none !important;
}
</style>