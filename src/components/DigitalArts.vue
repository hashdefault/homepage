<template>
  <div class='description'>
    <div class='' v-for="(art, index) in arts" :key='index'>
      <a :href='art.art_url' target='_blank'><img :src="art.art_url" class="art_image" alt="..." /> </a>
    </div>
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
      const context = require.context("@/assets/digitalarts", false, /\.(png|jpe?g|gif|webp)$/);
      return context.keys().map(file => ({
        art_url: context(file)
      }));
    }
  }
}
</script>
<style>
.description {
  padding:20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-self: center;
  justify-content: center;
  width: 50%;
  overflow: hidden;
}

.art_image {
  border-radius: 3px;
  width: 250px;
  margin: 10px;
  transition: transform 0.3s ease-in-out;
}

.art_image:hover {
  border: 5px solid white;
  transform: scale(1.3);
  cursor: pointer;
}
</style>
