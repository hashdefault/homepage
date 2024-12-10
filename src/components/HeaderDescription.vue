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
  background-color: rgb(40, 40, 40);
  color: white;
  text-align: center;
  padding-top: 20px;
  flex-grow: 1;
  width: 100%;
}
h2 {
  font-size: 36px;
}

@media (max-width: 768px) {
  .header-description {
    flex-direction: column;
    flex-grow: 0;
    align-items: center;
  }
}
</style>
