<template>
  <v-row class="mt-15 pa-md-10 pa-5 pb-0">
    <v-col md="2" cols="4">
      <h5 class="secondary--text text-body-1 mb-5">Dirham Crypto</h5>
      <ul class="ul_footer">
        <a href="https://dirhamcrypto.io/EnWhitepaper.pdf"
          ><li>Whitepaper</li></a
        >
        <a href=""><li>Blog</li></a>
        <a href=""><li>FAQ</li></a>
        <a href=""><li>Governance</li></a>
        <a href=""><li>Brokers</li></a>
        <a href=""><li>Transparency</li></a>
      </ul>
    </v-col>
    <v-col md="2" cols="4">
      <h5 class="secondary--text text-body-1 mb-5">Developers</h5>
      <ul class="ul_footer">
        <a href="https://github.com/DirhamCrypto"><li>Github</li></a>
        <a href=""><li>Docs</li></a>
        <a href="https://callisto.network/dirham-token-security-audit/"
          ><li>Security Audit</li></a
        >
        <a href=""><li>MultiChain</li></a>
      </ul>
    </v-col>
    <v-col md="2" cols="4">
      <h5 class="secondary--text text-body-1 mb-5">Ecosystem</h5>
      <ul class="ul_footer">
        <a href="https://www.coingecko.com/en/coins/dirham-crypto"
          ><li>CoinGecko</li></a
        >
        <a
          href="https://etherscan.io/token/0x30365ed4ca8173013ad948b9842f34ac71d01f7c"
          ><li>Ether Scan</li></a
        >
        <a
          href="https://bscscan.com/token/0x30365ed4ca8173013ad948b9842f34ac71d01f7c"
          ><li>BSC Scan</li></a
        >
        <a
          href="https://tronscan.org/#/token20/TR22k2MS5GGsD6U2rbsHizk3BXGbGiufDN"
          ><li>Tron Scan</li></a
        >
      </ul>
    </v-col>
    <v-col
      md="3"
      cols="8"
      class="offset-md-0 offset-2 text-center text-md-left"
    >
      <h5 class="secondary--text text-body-1 mb-5">social</h5>
      <a href="https://twitter.com/DirhamCrypto" target="_blank">
        <img src="/twitter.svg" alt="" />
      </a>
      <a href="https://github.com/DirhamCrypto">
        <img src="/github.svg" alt="" />
      </a>
      <a href="https://t.me/Dirham_Crypto">
        <img src="/telegram.svg" alt="" />
      </a>
    </v-col>
    <v-col md="12" cols="12" class="text-center"
      >© 2021 Dirham Operations</v-col
    >
  </v-row>
</template>

<script>
export default {}
</script>

<style scoped>
.ul_footer > li {
  font-size: 14px;
  font-weight: 300;
  margin: 10px 0px;
}
.ul_footer {
  list-style-type: none; /* Remove bullets */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margins */
}
a {
  color: aliceblue !important;
}
a:hover {
  color: #ffea94;
}
</style>