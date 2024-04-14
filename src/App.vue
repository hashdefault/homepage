<template>
  <header class="header">
    <HeaderDescription />
    <NavBarHome />
  </header>

  <div class="container">
    <HomeFoto />
    <HomeDescription />
  </div>
  <div class="medias">
    <SocialMedia />
  </div>
  <footer class="footer">
    <FooterDescription />
  </footer>
</template>

<script>
import HomeFoto from "./components/HomeFoto.vue";
import HomeDescription from "./components/HomeDescription.vue";
import HeaderDescription from "./components/HeaderDescription.vue";
import FooterDescription from "./components/FooterDescription.vue";
import SocialMedia from "./components/SocialMedia.vue";
import NavBarHome from "./components/NavBarHome.vue";

export default {
  name: "App",
  components: {
    HomeFoto,
    HomeDescription,
    HeaderDescription,
    FooterDescription,
    SocialMedia,
    NavBarHome,
  },
};
</script>

<style>
.header {
  width: 100%;
  display: flex;
  align-items: center;
  align-items: flex-start;
}
#app {
  background-color: rgb(30, 30, 30);
  font-family: Nunito, Rubik, Mulish, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  width: 100%;
  flex-direction: column;
  display: flex;
  min-height: 100vh;
}
.container {
  padding-top: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  align-self: center;
}
.footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: flex-end;
  justify-content: space-between;
  align-content: flex-end;
  height: 100%;
}
body {
  margin: 0;
  width: 100%;
}
.medias {
  flex-direction: column;
  flex: 1;
  display: flex;
  align-self: center;
  align-items: center;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
</style>
