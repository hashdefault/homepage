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
  background: linear-gradient(
    to left,
    rgb(40, 40, 40) 15%,
    rgb(60, 60, 60) 15%,
    rgb(60, 60, 60) 85%,
    rgb(40, 40, 40) 85%
  );

  color: white;
  text-align: center;
  padding-top: 20px;
  flex-grow: 1;
  width: 100%;
}
h2 {
  font-size: 36px;
}

@media (max-width: 1024px) {
  .header-description {
    flex-direction: column;
    flex-grow: 0;
    align-items: center;
    background: linear-gradient(
      to left,
      rgb(40, 40, 40) 12%,
      rgb(60, 60, 60) 12%,
      rgb(60, 60, 60) 88%,
      rgb(40, 40, 40) 88%
    );
  }
}
</style>
