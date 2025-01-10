<template>
  <div class="footer-description">
    <hr />
    <p>2024 All rights reserved</p>
  </div>
</template>
<script>
export default {
  name: "FooterDescription",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer-description {
  width: 100%;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  background: linear-gradient(
    to left,
    rgb(40, 40, 40) 15%,
    rgb(60, 60, 60) 15%,
    rgb(60, 60, 60) 85%,
    rgb(40, 40, 40) 85%
  );
  border-left: 3px solid blue;
  z-index: 1;
}
hr {
  width: 90%;
  text-align: center;
  display: flex;
  height: 1px;
  background-color: white;
  border: none;
}

@media (max-width: 1024px) {
  .footer-description {
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
