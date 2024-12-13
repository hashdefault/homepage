<template>
  <div class="description">
    <a class="btn hovers" @click="activateDiv">Tech Stack</a>
    <a  class="btn hovers">Contato</a>
    <a class="btn hovers">Videos</a>
  </div>
</template>
<script>
export default {
  name: "HoverButtons",
  mounted() {},
  data() {
    return {};
  },
  methods: {
    activateDiv() {
      this.$emit("activate");
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
  align-self: center;
  align-items: center;
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

@media (max-width: 768px) {
  .description {
    width: 90%;
    padding: 0;
  }
}
</style>
