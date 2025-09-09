<template>
  <section class="colorLight">
    <header class="header">
      <div class="nav">
        <HoverButtons @activateTech="handleActivateTech" />
        <ThemeToggle />
      </div>
      <div class="illustration">
        <img class="gifs_illustration" src="./assets/gifs/morecoffee.gif" />
        <br />
        <img class="moving_image" src="./assets/gifs/zombie.gif" />
      </div>
    </header>
    <div class="container">
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
import FooterDescription from "./components/FooterDescription.vue";
import SocialMedia from "./components/SocialMedia.vue";
import HoverButtons from "./components/HoverButtons.vue";
import ThemeToggle from "./components/ThemeToggle.vue";

export default {
  name: "App",
  created() {
    document.title = "dev. lucas";
  },

  components: {
    FooterDescription,
    SocialMedia,
    HoverButtons,
    ThemeToggle,
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
:root {
  --bg: rgb(22, 22, 22);
  --bg-soft: rgb(50, 50, 50);
  --text: rgb(240, 240, 240);
  --text-invert: rgb(16, 16, 16);
  --accent: rgb(0, 255, 255);
  --card: rgba(50, 50, 50, 0.6);
}

[data-theme="light"] {
  --bg: rgb(248, 248, 248);
  --bg-soft: rgb(235, 235, 235);
  --text: rgb(18, 18, 18);
  --text-invert: rgb(240, 240, 240);
  --accent: rgb(0, 255, 255); /* preserve accent */
  --card: rgba(255, 255, 255, 0.8);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.colorLight {
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
  width: 45%;
  padding: 0 25px;
  background-color: var(--bg);
  z-index: 2;
}

.moving_image {
  position: relative;
  width: 70px;
  height: auto;
  animation: moveImage 20s linear infinite;
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
}

.illustration {
  padding: 40px 25px 100px 25px;
  background-color: var(--bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 40%;
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
  background-color: var(--bg);
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
  display: flex;
  align-self: center;
  align-items: center;
  width: 40%;
  padding: 25px;
  background-color: var(--bg);
  margin: -1px;
}

.gifs_illustration {
  width: 300px;
}


@media (max-width: 1024px) {
  .colorLight {
    background: none;
    background-color: var(--bg);
  }

  .illustration {
    width: 100%;
  }

  .gifs_illustration {
    width: 60%;
  }

  .header {
    width: 70%;
    padding: 0 25px;
  }

  .medias {
    width: 70%;
  }


  .nav {
    width: 100%;
    padding: 0 25px;
    margin-bottom: -1px;
    z-index: 2;
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
