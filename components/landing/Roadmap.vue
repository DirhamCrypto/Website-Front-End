<template>
  <div
    :class="[
      'mt-15',
      'px-10',
      'mx-md-15',
      'pa-md-10',
      'roadmap',

      {
        'overflow-x-auto': $vuetify.breakpoint.smAndDown,
        'overflow-y-hidden': $vuetify.breakpoint.smAndDown,
      },
    ]"
  >
    <div :class="{ 'roadmap-mobile': $vuetify.breakpoint.smAndDown }">
      <img
        src="/landing/dhsStarL.svg"
        class="dhsStarL d-none d-md-flex"
        alt=""
      />
      <img
        src="/landing/DhsStarR.svg"
        class="dhsStarR d-none d-md-flex"
        alt=""
      />
      <h3 class="title text-h2 font-weight-bold my-10">Roadmap</h3>
      <v-row>
        <v-col cols="3">
          <b class="season text-h4 font-weight-bold">2020 Q4</b>
          <ul class="ul_roadmap">
            <li class="my-5">Website and Social Networks</li>
            <li class="my-5">Drachma DAO on Aragon</li>
            <li class="my-5">Delegates Election</li>
            <li class="my-5">Dirham and Dor on Rinkeby Testnet</li>
            <li class="my-5">Dirham and Dor on Ethereum Mainnet</li>
            <li class="my-5">Security Audit</li>
            <li class="my-5">First Dirham Bond</li>
            <li class="my-5">Dor Minting</li>
          </ul>
        </v-col>
        <v-col cols="2">
          <b class="season text-h4 font-weight-bold">2021&nbsp;Q1</b>
          <ul class="ul_roadmap">
            <li class="my-5">Proof of Concept</li>
            <li class="my-5">Whitepaper</li>
          </ul>
        </v-col>
        <v-col cols="2">
          <b class="season text-h4 font-weight-bold">2021&nbsp;Q2</b>
          <ul class="ul_roadmap">
            <li class="my-5">Private Sale</li>
            <li class="my-5">Dirham and Dor on BSC</li>
            <li class="my-5">Dirham and Dor on Tron</li>
            <li class="my-5">LP on Dexes</li>
            <li class="my-5">V2</li>
            <li class="my-5">Mutual Funds</li>
          </ul>
        </v-col>
        <v-col cols="2">
          <b class="season text-h4 font-weight-bold">2021&nbsp;Q3</b>
          <ul class="ul_roadmap">
            <li class="my-5">DirhamSwap</li>
            <li class="my-5">Website Upgrade</li>
            <li class="my-5">Marketing Strategy</li>
            <li class="my-5">Local Brokers</li>
            <li class="my-5">Local Communities</li>
            <li class="my-5">Reward Mecanisms</li>
          </ul>
        </v-col>
        <v-col cols="3">
          <b class="season text-h4 font-weight-bold">2021&nbsp;Q4</b>
          <ul class="ul_roadmap">
            <li class="my-5">Public Sale</li>
            <li class="my-5">Partnerships</li>
            <li class="my-5">Bridges</li>
            <li class="my-5">Exchange Listing</li>
            <li class="my-5">Governance Token (Dor) Distribution</li>
            <li class="my-5">Voting for Dor Holders</li>
            <li class="my-5">Mutual Funds Profits for Dor Holders</li>
          </ul>
        </v-col>
      </v-row>
    </div>
  </div>
</template>




<style scoped>
.roadmap {
  background: #09232e;
  position: relative;
}
.title {
  color: #dbf4ff;
}
.ul_roadmap {
  list-style-type: none; /* Remove bullets */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margins */
}
.ul_roadmap > li {
  font-size: 14px;
  font-weight: 300;
}
.season {
  background: radial-gradient(
    circle,
    rgba(56, 87, 101, 1) 0%,
    rgba(219, 244, 255, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.dhsStarL {
  position: absolute;
  left: -142px;
  top: 50%;
}
.dhsStarR {
  position: absolute;
  right: -100px;
  top: 50%;
}
.roadmap-mobile {
  width: 1000px;
}
.roadmap::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #09232e;
  border-radius: 10px;
}
.roadmap::-webkit-scrollbar {
  width: 10px;
  background-color: #09232e;
}
.roadmap::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: linear-gradient(
    270deg,
    #133b4d 0%,
    rgba(22, 87, 115, 0.78) 29.24%,
    #133b4d 71.47%,
    rgba(19, 59, 77, 0.45) 100%
  );
}
</style>