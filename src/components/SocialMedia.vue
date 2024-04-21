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
  margin-top: 100px;
}
.link {
  color: #15f5ba;
  text-decoration: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  font-weight: bold;
}
.link:hover {
  background-color: rgba(21, 245, 186, 0.1);
  transition: all 0.6s;
}
i {
  padding-right: 5px;
}
</style>
