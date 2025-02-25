<template>
  <div class="description">
    <div class='portfolio work1'>
      <a href='https://news.bitsbylucas.com'>
        <img :src="work1" class='works'>
        <h4>Website de notícias</h4>
      </a>
    </div>
  </div>
</template>
<script>

import work1 from "./../assets/images/portfolio/work1.png";

export default {
  name: "PortfolioList",
  mounted() { },

  data() {
    return {
      work1: work1,
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=VT323&display=swap");

.portfolio {
  border: 3px solid cyan;
  border-radius: 10px;
  width: 320px;
}

.works {
  width: 300px;
  padding: 10px;
}

.description {
  padding: 25px;
  width: 60%;
}

@media (max-width: 768px) {
  .description {
    width: 80%;
  }
}
</style>
