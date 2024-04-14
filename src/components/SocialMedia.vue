<template>
  <div class="social-media">
    <p>
      <a class="link" target="_blank" href="https://github.com/lugabrielbueno"
        ><i class="fa fa-github"></i> GitHub</a
      >
    </p>
    <p>
      <a
        class="link"
        target="_blank"
        href="https://www.linkedin.com/in/lucas-g-bueno/"
        ><i class="fa fa-linkedin"></i> LinkedIn</a
      >
    </p>
  </div>
</template>
<script>
export default {
  name: "SocialMedia",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.social-media {
  background-color: rgb(30, 30, 30);
  width: 100%;
  color: white;
  text-align: center;
  padding-top: 20px;
}
.link {
  color: white;
  text-decoration: none;
  cursor: pointer;
}
</style>
