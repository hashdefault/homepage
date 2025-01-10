<template>
  <div class="header-description">
    <h2>Lucas G. Bueno</h2>
    <h2>Desenvolvedor Fullstack</h2>
  </div>
</template>
<script>
export default {
  name: "HeaderDescription",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-description {
  background-color: rgb(80, 80, 80);
  color: white;
  text-align: center;
  flex-grow: 1;
  width: 65%;
  padding:25px;
  border-left: 2px solid rgba(0, 255, 255, 0.7);
}
h2 {
  font-size: 36px;
}

@media (max-width: 1024px) {
  .header-description {
    flex-direction: column;
    flex-grow: 0;
    align-items: center;
    background-color: rgb(80, 80, 80);
  }
}
</style>
