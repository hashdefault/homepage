<template>
  <div class="description">
    <p>Em construção...</p>
  </div>
</template>
<script>
export default {
  name: "VideosPage",
  mounted() {},

  data() {
    return {};
  },
  props: {
    isPostsActive: {
      type: Boolean,
      required: true,
    },
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=VT323&display=swap");

.description {
  padding: 25px;
  justify-content: flex-start;
  color: white;
  font-family: "Courier Prime";
  width: 65%;
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
  flex: 1;
  background-color: rgb(80,80,80);
  border-left: 2px solid rgba(0,255,255,0.8);
}
p {
  color: white;
  font-family: "Courier Prime";
}

@media (max-width: 768px) {
  .description {
    width: 60%;
    padding: 0;
  }
}
</style>
