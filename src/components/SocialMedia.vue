<template>
  <div class="social-media">
    <p>
      <a class="link" target="_blank" href="https://github.com/hashdefault"
        ><i class="fa-brands fa-github"></i> GitHub</a
      >
    </p>
    <p>
      <a
        class="link"
        target="_blank"
        href="https://www.linkedin.com/in/lucas-g-bueno/"
        ><i class="fa-brands fa-linkedin"></i> LinkedIn</a
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
  background-color: rgb(22, 22, 22);
  display: flex;
  flex-direction: column;
  width: 100%;
  color: white;
  text-align: center;
  padding-top: 10px;
}
.link {
  color: rgb(0, 255, 255);
  text-decoration: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  font-weight: bold;
}
p {
  margin: 10px;
}
.link:hover {
  background-color: rgba(0, 255, 255, 0.1);
  transition: all 0.6s;
}
i {
  padding-right: 5px;
}

</style>
