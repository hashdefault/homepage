<template>
  <div class="description">
    Email
  </div>
</template>
<script>
export default {
  name: "ContatoHome",
  data() {
    return {};
  },
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=VT323&display=swap");

.description {
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: flex-start;
}
@media (max-width: 768px) {
  .description {
    width: 90%;
    padding: 0;
  }
}
</style>
