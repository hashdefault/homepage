<template>
  <div class='container' v-for="(art, index) in arts" :key='index'>
    <img :src="art.art_url" class="art_image" alt="..." />
  </div>
</template>
<script>
export default {
  name: "DigitalArts",
  data() {
    return {
      arts: this.importArts()
    }
  },
  methods: {
    importArts() {
      const context = require.context("@/assets/arts", false, /\.(png|jpe?g|gif)$/);
      return context.keys().map(file => ({
        art_url: context(file)
      }));
    }

  }
}
</script>
<style>
.container {
  width: 40%;

}

.art_image {
  border-radius: 3px;
  width: 100px;

}
</style>
