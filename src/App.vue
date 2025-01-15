<template>
  <section class="colorLight">
    <header class="header">
      <div class="nav">
        <NavBarHome />
      </div>
      <div class="illustration">
        <img class="gifs_illustration" src="./assets/gifs/morecoffee.gif" />
        <br />
        <img class="moving_image" src="./assets/gifs/zombie.gif" />
      </div>
    </header>
    <div class="container">
      <div class="banner_desc">
        <p>i use arch, btw</p>
      </div>
      <HeaderDescription />
      <router-view :class="smooth - view" />
      <HoverButtons @activateTech="handleActivateTech" />
      <TechStackDescription :isTechStackActive="isTechStackActive" />
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
.smooth-view {
  opacity: 1;
}

.banner_desc {
  text-align: center;
  backdrop-filter: blur(8px);
  padding: 0px 25px;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  width: 55%;
  background-color: rgb(20, 20, 20);
  border-left: 2px solid rgba(0, 255, 255, 0.7);
  z-index: 2;
}
.banner_desc p {
  text-align: center;
  padding: 10px 20px;
  width: 40%;
  background-color: rgba(50, 50, 50, 0.6);
  border-radius: 15px;
  border: 1px solid rgba(50, 50, 50, 0.6);
  color: rgb(240, 240, 240);
  font-size: 18px;
  font-family: Nunito, monospace;
}

.colorLight {
  /*background-image: url("./assets/gifs/trex-pc.gif");
  background-size: 150px; */
  background-color: rgb(20, 20, 20);
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
  width: 55%;
  padding: 0 25px;
  background-color: rgb(20, 20, 20);
  border-left: 2px solid rgba(0, 255, 255, 0.7);
  z-index: 2;
}
.moving_image {
  position: relative;
  width: 70px; /* Adjust size as needed */
  height: auto;
  animation: moveImage 20s linear infinite;
  z-index: 1;
  overflow: hidden;
}

@keyframes moveImage {
  from {
    left: -200px;
  }
  to {
    left: 200px; /* Adjust for desired endpoint */
  }
}
.header {
  width: 100%;
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
  z-index: 2;
}
.illustration {
  padding: 0px 25px 100px 25px;
  background-color: rgb(20, 20, 20);
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 55%;
  border-left: 2px solid rgba(0, 255, 255, 0.7);
  z-index: 2;
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
  z-index: 2;
}
.footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: flex-end;
  justify-content: space-between;
  align-content: flex-end;
  z-index: 2;
}
body {
  margin: 0;
  width: 100%;
}
.medias {
  flex-direction: column;
  display: flex;
  align-self: center;
  align-items: center;
  width: 55%;
  padding: 25px;
  background-color: rgb(20, 20, 20);
  border-left: 2px solid rgba(0, 255, 255, 0.7);
  margin: -1px;
  z-index: 2;
}
.gifs_illustration {
  width: 350px;
}

@media (max-width: 1024px) {
  .illustration {
    width: 100%;
  }
  .gifs_illustration {
    width: 70%;
  }
  .header {
    width: 80%;
    padding: 0 25px;
  }
  .medias {
    width: 80%;
  }
  .banner_desc {
    width: 80%;
  }
  .banner_desc p {
    width: 80%;
  }
  .nav {
    width: 100%;
    padding: 0 25px;
    margin-bottom: -1px;
  }

@keyframes moveImage {
  from {
    left: -150px;
  }
  to {
    left: 150px; /* Adjust for desired endpoint */
  }
}
}
</style>
