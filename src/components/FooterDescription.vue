<template>
  <div class="footer-description">
    <hr />
    <p> © 2025 dev. lucas.  All rights reserved</p>
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
  width: 55%;
  padding: 25px;
  color: rgba(255,255,255,0.7);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-self: center;
  background-color: rgb(22, 22, 22);
  z-index: 1;
}
hr {
  width: 90%;
  text-align: center;
  display: flex;
  height: 1px;
  background-color: rgba(255,255,255,0.7);
  border: none;
}
@media (max-width: 1024px) {
  .footer-description {
    width: 80%;
  }
}
</style>
