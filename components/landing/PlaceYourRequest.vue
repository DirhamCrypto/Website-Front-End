<template>
  <div class="place_request px-md-15 px-2">
    <img
      :class="['pattern', { 'pattern-mobile': $vuetify.breakpoint.smAndDown }]"
      src="/landing/reqPattern.png"
      alt=""
    />
    <h4 class="info--text text-md-body-1 text-caption mt-10">
      Dirham is issued in the form of one-million-Dirham bonds.
    </h4>
    <h3 class="mt-10 primary--text text-h5">
      Buy or Redeem amounts higher than one million :
    </h3>
    <v-row justify="end" class="mt-1">
      <v-col class="mr-5" md="4" cols="8">
        <v-btn
          class="text-left request_btn accent--text text-md-h5 font-weight-bold"
          tile
          block
          elevation="0"
          color="success"
        >
          Place your Request
          <img
            :class="[
              'my-2',
              'ml-5',
              { 'req-dhs-logo': $vuetify.breakpoint.smAndDown },
            ]"
            src="/landing/reqDhsLogo.svg"
            alt=""
          />
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {}
</script>


<style scoped>
.place_request {
  position: relative;
  background-color: #09232e;
  width: 100%;
  overflow: hidden;
  z-index: 1;
  height: 282px;
}
.pattern-mobile {
  opacity: 0.4;
}
.pattern {
  z-index: -1;
  position: absolute;
  right: 0px;
  height: 282px;
}
.request_btn {
  text-transform: none;
  justify-content: space-between;
  height: auto !important;
  background: linear-gradient(
    90.08deg,
    #ffea94 0.06%,
    #fff1ba 18.27%,
    #ffea95 51.13%,
    #fff6d0 73.3%,
    #ffea94 99.93%
  );
}
.req-dhs-logo {
  width: 50px;
}
</style>