<template>
  <v-app class="bk-red">
    <v-app-bar
      :fixed="$vuetify.breakpoint.smAndDown"
      flat
      :class="[
        'fixed',
        'dense',
        'overflow-hidden',
        {
          'background-sm': $vuetify.breakpoint.smAndDown,
          'background-md': $vuetify.breakpoint.mdAndUp,
        },
      ]"
      max-height="116px"
      color="#0F2732"
    >
      <Navigation />
    </v-app-bar>

    <div class="overflow-hidden">
      <Nuxt />
      <Footer />
    </div>
  </v-app>
</template>


<script>
import Navigation from '@/components/landing/Navigation.vue'
import Footer from '@/components/landing/Footer.vue'
export default {
  components: {
    Navigation,
    Footer,
  },
  data: () => ({
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ],
  }),
}
</script>

<style scoped>
.background-sm {
  padding: 0 5px;
  height: 70px !important;
  background: linear-gradient(
    270deg,
    #133b4d 0%,
    rgba(22, 87, 115, 0.78) 29.24%,
    #133b4d 71.47%,
    rgba(19, 59, 77, 0.45) 100%
  );
  backdrop-filter: blur(32px);
}
.v-application {
  font-family: 'Open Sans', sans-serif !important;
  background-color: #0f2732 !important;
}
.background-md {
  height: 116px !important;
}
</style>