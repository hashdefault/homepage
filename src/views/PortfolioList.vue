<template>
  <div class="description">
    <div class='portfolio work1'>
      <a href='https://news.bitsbylucas.com' target='_blank'>
        <img :src="work1" class='works'>
        <h4>Website de Notícias</h4>
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

h4 {
  color: white;
  font-size: 18px;
  margin-top: 5px;
  font-family: "Courier Prime";
  font-style: normal;
  text-align:center;
}

a {
  text-align: center;
  padding: 0;
  text-decoration: none;
  transition: transform 0.3s ease-in-out;
  border-radius:3px;
}

.portfolio {
  width: 310px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  align-self:center;
  padding:20px;
}

a:hover {
  transform: scale(1.3);
  cursor: pointer;
  border:5px solid white;
}

.works {
  width: 240px;
  padding: 5px;
  border-radius: 5px;
}

.description {
  padding: 25px;

  width: 40%;
}

@media (max-width: 768px) {
  .description {
    width: 70%;
  }
}
</style>
