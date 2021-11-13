<template>
  <v-row class="mt-15" justify="center">
    <v-col md="8" cols="12" class="text-center mt-15">
      <div class="parent mt-15">
        <iframe
          width="100%"
          height="450"
          src="https://www.youtube.com/embed/HOuu6uEsDM8"
          title="What is dirham Crypto?"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>

        <img class="child" src="@/assets/landing/patternVideo.png" alt="" />
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Motion',
}
</script>

<style scoped>
.parent {
  position: relative;
  z-index: 1;
}
.child {
  position: absolute;
  bottom: -60px;
  right: -100px;
  z-index: -5;
}
</style>