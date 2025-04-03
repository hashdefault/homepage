<template>
  <div class="footer-description">
    <hr />
    <p> © 2025 dev. lucas. All rights reserved</p>
  </div>
</template>
<script>
export default {
  name: "FooterDescription",
};
</script>


<style scoped>
.footer-description p {
  font-size: 14px;
}

.footer-description {
  width: 40%;
  padding: 25px;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-self: center;
  background-color: rgb(22, 22, 22);
  z-index: 1;
}

hr {
  width: 100%;
  text-align: center;
  display: flex;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
}

@media (max-width: 1024px) {
  .footer-description {
    width: 80%;
  }
}
</style>
