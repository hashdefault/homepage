<template>
  <section class="colorLight">
    <header class="header">
      <div class="nav">
        <NavBarHome />
        <HoverButtons @activateTech="handleActivateTech" />
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
      <transition name="fade" mode="out-in">
        <router-view :class="smooth - view" />
      </transition>
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
import HeaderDescription from "./components/HeaderDescription.vue";
import FooterDescription from "./components/FooterDescription.vue";
import SocialMedia from "./components/SocialMedia.vue";
import NavBarHome from "./components/NavBarHome.vue";
import HoverButtons from "./components/HoverButtons.vue";

export default {
  name: "App",
  created() {
    document.title = "dev. lucas";
  },

  components: {
    HeaderDescription,
    FooterDescription,
    SocialMedia,
    NavBarHome,
    HoverButtons,
  },

  computed: {
    backgroundStyle() {
      return {
        backgroundImage: this.gif,
      };
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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
  background-color: rgb(22, 22, 22);
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
  background: linear-gradient(
    to right,
    rgb(22, 22, 22) 18.9%,
    rgba(0, 255, 255, 0.7) 18.9%,
    rgba(0, 255, 255, 0.7) 19%,
    rgb(22, 22, 22) 19%
  );
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
  background-color: rgb(22, 22, 22);
  z-index: 2;
}
.moving_image {
  position: relative;
  width: 70px;
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
    left: 200px;
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
  background-color: rgb(22, 22, 22);
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 55%;
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
  background-color: rgb(22, 22, 22);
  margin: -1px;
  z-index: 2;
}
.gifs_illustration {
  width: 350px;
}

@media (max-width: 1024px) {
  .colorLight {
    background:none;
    background-color:rgb(22,22,22);
  }

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
      left: 150px;
    }
  }
}
</style>
