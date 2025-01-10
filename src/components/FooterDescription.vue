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
  width: 65%;
  padding:25px;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-self: center;
  background-color: rgb(80,80,80);
  z-index: 1;
  border-left: 2px solid rgba(0, 255, 255, 0.7);

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
      rgb(0, 0, 0) 12%,
      rgb(80, 80, 80) 12%,
      rgb(80, 80, 80) 88%,
      rgb(0, 0, 0) 88%
    );
  }
}
</style>
