<template>
  <section class="colorLight">
    <header class="header">
      <div class="nav">
        <NavBarHome />
      </div>
    </header>
    <div class="container">
      <HeaderDescription />
      <router-view />
      <HoverButtons @activateTech="handleActivateTech" />
      <TechStackDescription :isTechStackActive="isTechStackActive" />
    </div>
    <div class="illustration"  >
      <img class='gifs_illustration' src="./assets/gifs/morecoffee.gif" />
      <img class='gifs_illustration' src="./assets/gifs/catscafe-penguin.gif" width="250" />
    </div>
    <div class="medias">
      <SocialMedia />
    </div>
    <footer class="footer">
      <FooterDescription />
    </footer>
  </section>
</template>

<script>
//import HomeFoto from "./components/HomeFoto.vue";
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
    //HomeFoto,
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
      gif: require("@/assets/gifs/monkeypc.webp"),
    };
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: this.gif,
      };
    },
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
  /*background-image: url("./assets/gifs/trex-pc.gif");
  background-size: 150px; */
  background-color: rgb(40, 40, 40);
  width: 100%;
  display: flex;
  align-items: center;
  align-self: center;
  flex-direction: column;
}
.nav {
  align-items: center;
  align-self: center;
  display: flex;
  flex-direction: row;
  width: 65%;
  padding: 25px;
  background-color: rgb(80, 80, 80);
  border-left: 2px solid rgba(0, 255, 255, 0.7);
}
.header {
  width: 100%;
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
}
.illustration {
  padding: 0px 25px;
  background-color: rgb(80, 80, 80);
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 65%;
  border-left: 2px solid rgba(0, 255, 255, 0.7);
}
#app {
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
  width: 65%;
  padding: 25px;
  background-color: rgb(80, 80, 80);
  border-left: 2px solid rgba(0, 255, 255, 0.7);
}

@media (max-width: 1024px) {
  .cointainer {
    max-width: 80%;
  }
  .illustration {
    max-width: 80%;
  }
  .gifs_illustration {
    width: 70%;
  }
}
</style>
