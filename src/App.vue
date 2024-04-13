<template>
  <header class="header">
    <HeaderDescription />
  </header>

  <div class="container">
    <HomeFoto />
    <HomeDescription />
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

export default {
  name: "App",
  components: {
    HomeFoto,
    HomeDescription,
    HeaderDescription,
    FooterDescription,
  },
};
</script>

<style>
.header {
  width: 100%;
  background-color: rgb(30, 30, 30);
  display: flex;
  flex-direction: column;
  align-items: center;
}
#app {
  background-color: rgb(30, 30, 30);
  font-family: Nunito, Rubik, Mulish, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
}
.container {
  padding-top: 50px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  align-self: center;
  display: flex;
}
.footer {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  align-self: flex-end;
}
hr {
  width: 80%;
  text-align: center;
  display: flex;
  height: 1px;
  background-color: white;
  border: none;
}
body {
  margin: 0;
  height: 100%;
  width: 100%;
}
</style>
