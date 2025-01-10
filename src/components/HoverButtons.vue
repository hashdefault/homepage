<template>
  <div class="description">
    <a class="btn hovers" @click="activateDivTech">Tech Stack</a>
    <RouterLink to="/posts" class="btn hovers">Posts </RouterLink>
    <RouterLink to="/videos" class="btn hovers">Videos </RouterLink>
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
  display: flex;
  flex-direction: row;
  padding: 25px;
  align-self: center;
  align-items: center;
  background-color: rgb(80, 80, 80);
  width: 65%;
  border-left: 2px solid rgba(0, 255, 255,0.7);
}
.hovers {
  position: relative;
  padding: 5px 40px;
  margin: 10px 100px;
  background: none;
  color: white;
  text-decoration: none;
  font-size: 20px;
  cursor: pointer;
  border: none;
  font-family: Consolas, monospace;
  font-weight: 700;
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
    width: 70%;
  }
  .hovers {
    width: 80%;
    padding: 20px 15px;
    margin: 15px;
  }
}
@media (max-width: 500px) {
  .hovers {
    padding: 20px 15px;
    font-size: 12px;
  }
}
</style>
