<template>
  <section class="colorLight">
    <header class="header">
      <div class="nav">
        <NavBarHome />
      </div>
      <HeaderDescription />
    </header>
    <div class="container">
      <HomeFoto />
      <router-view />
      <HoverButtons @activateTech="handleActivateTech" />
      <TechStackDescription :isTechStackActive="isTechStackActive" />
    </div>
    <div class="medias">
      <SocialMedia />
    </div>
  </section>
  <footer class="footer">
    <FooterDescription />
  </footer>
</template>

<script>
import HomeFoto from "./components/HomeFoto.vue";
import HeaderDescription from "./components/HeaderDescription.vue";
import FooterDescription from "./components/FooterDescription.vue";
import SocialMedia from "./components/SocialMedia.vue";
import NavBarHome from "./components/NavBarHome.vue";
import TechStackDescription from "./components/TechStackDescription.vue";
import HoverButtons from "./components/HoverButtons.vue";

export default {
  name: "App",
  created() {
    document.title = "dev. lucas";
  },
  components: {
    HomeFoto,
    HeaderDescription,
    FooterDescription,
    SocialMedia,
    NavBarHome,
    TechStackDescription,
    HoverButtons,
  },
  data() {
    return {
      isTechStackActive: false,
    };
  },
  methods: {
    handleActivateTech() {
      if (this.isTechStackActive) {
        this.isTechStackActive = false;
      } else {
        this.isTechStackActive = true;
      }
    },
  },
};
</script>

<style>
.colorLight {
  background: linear-gradient(
    to left,
    rgb(40, 40, 40) 15%,
    rgb(60, 60, 60) 15%,
    rgb(60, 60, 60) 85%,
    rgb(40, 40, 40) 85%
  );
  width: 100%;
  display: flex;
  align-items: center;
  align-self: center;
  flex-direction: column;
}
.nav {
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  width: 100%;
}
.header {
  width: 100%;
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
}
#app {
  background-color: rgb(40, 40, 40);
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
  background-clip: padding-box, border-box;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
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

@media (max-width: 1024px) {
  .container {
    flex-direction: column;
    width: 95%;
  }
  body {
    width: 100%;
  }
  .colorLight {
    background: linear-gradient(
      to left,
      rgb(40, 40, 40) 12%,
      rgb(60, 60, 60) 12%,
      rgb(60, 60, 60) 88%,
      rgb(40, 40, 40) 88%
    );
  }
}
</style>
