<template>
  <div class="description">
    <RouterLink to="/" class="btn home_link"
      ><i class="fa fa-home"></i>
    </RouterLink>
    <RouterLink to="/techstack" class="btn hovers">Tech Stack </RouterLink>
    <RouterLink to="/posts" class="btn hovers">Posts </RouterLink>
    <RouterLink to="/portfolio" class="btn hovers">Portfólio </RouterLink>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>

<script>
export default {
  name: "HoverButtons",
  mounted() {},
  data() {
    return {};
  },
  methods: {
    activateDivTech() {
      this.$emit("activateTech");
    },
  },
  created() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=VT323&display=swap");

.description {
  padding: 5px;
  background-color: rgb(20, 20, 20);
  margin: 20px;
  text-align: right;
  float: left;
  width: 100%;
}
.home_link {
  color: white;
  float: left;
  cursor: pointer;
  margin-right: 10px;
  display: none;
  padding: 3px;
}
.hovers {
  position: relative;
  padding: 2px 20px;
  margin: 0 20px;
  color: white;
  text-decoration: none;
  font-size: 20px;
  cursor: pointer;
  border: none;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 500;
  border-radius: 8px;
  overflow: hidden;
}
.hovers::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: rgb(0, 255, 255);
  transition: width 0.3s ease-in-out;
}
.hovers:hover::after {
  width: 100%;
}

@media (max-width: 1024px) {
  .description {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-self: center;
    padding: 0px;
    margin: 0px;
  }
  .hovers {
    font-size: 16px;
    margin: 8px;
    padding: 4px;
    text-align: center;
  }
  .home_link {
    display: flex;
    margin-right: 15px;
    padding: 3px;
  }
}
</style>
