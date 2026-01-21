<template>
  <div class='menu_responsive'>
    <button
      class="menu_toggle"
      @click="showMenu"
      :aria-expanded="!toggleMenu"
      aria-controls="mobile-menu"
      aria-label="Toggle navigation"
    >
      <i v-if="toggleMenu" class='fa fa-bars'></i>
      <i v-else class='fa fa-times'></i>
    </button>
  </div>
  <div v-if="!toggleMenu" class="backdrop" @click="closeMenu" aria-hidden="true"></div>
  <nav :class="{ 'show': !toggleMenu }" class='description' id="mobile-menu" role="navigation">
    <RouterLink to="/" class="btn home_link"><img src='@/assets/monkey.webp' width='25'> <span>dev. lucas</span>
    </RouterLink>
    <RouterLink to="/portfolio" class="btn hovers"><i class='fa fa-briefcase'></i> Works </RouterLink>
    <RouterLink to="/posts" class="btn hovers"><i class='fa fa-book'></i> Posts </RouterLink>
    <RouterLink to="/techstack" class="btn hovers"><i class='fa fa-layer-group'></i> Tech Stack </RouterLink>
  </nav>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>

<script>
export default {
  name: "HoverButtons",
  mounted() {
    const links = document.getElementsByClassName('btn')
    for (const link of links) {
      link.addEventListener('click', this.showMenu, false)
    }
    window.addEventListener('keydown', this.onKeydown)
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.onKeydown)
  },
  data() {
    return {
      toggleMenu: true,
    };
  },
  methods: {
    showMenu() {
      this.toggleMenu = !this.toggleMenu
      this.$nextTick(() => {
        document.body.style.overflow = this.toggleMenu ? '' : 'hidden'
      })
    },
    closeMenu() {
      this.toggleMenu = true
      document.body.style.overflow = ''
    },
    onKeydown(e) {
      if (e.key === 'Escape' && !this.toggleMenu) {
        this.closeMenu()
      }
    },
    activateDivTech() {
      this.$emit("activateTech");
    },
  },
  created() { },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=VT323&display=swap");

.description {
  padding: 2px;
  background-color: var(--bg);
  margin: 25px 5px;
  text-align: center;
  width: 100%;
}

.home_link {
  color: var(--text);
  float: left;
  cursor: pointer;
  margin-right: 55px;
  padding: 3px;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;

}

.description .home_link span {
  font-family: Nunito;
  margin-left: 10px;
  font-size: 17px;
  font-weight: 700;
}

.hovers {
  position: relative;
  padding: 2px 15px;
  margin: 0 5px;
  color: var(--text);
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  border: none;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 500;
  overflow: hidden;
}

.hovers::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--accent);
  transition: width 0.3s ease-in-out;
}

.menu_responsive {
  display: none;
}

.hovers:hover::after {
  width: 100%;
}

i {
  display: none;
}

@media (max-width: 1024px) {

  .description {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    width: 85%;
    max-width: 340px;
    top: 0;
    left: 0;
    padding: 16px 12px;
    margin: 0;
    background-color: var(--bg);
    border-right: 1px solid var(--bg-soft);
    box-shadow: 0 10px 30px rgba(0,0,0,.25);
    height: 100%;
    transform: translateX(-110%);
    opacity: 0;
    transition: transform 0.3s ease, opacity 0.2s ease;
    z-index: 1001;
  }
  .description a:nth-of-type(2){
    margin-top:20px;
  }

  .description .btn:first-of-type {
    align-self: center;
  }

  .hovers {
    font-size: 16px;
    margin: 8px 6px;
    padding: 8px 10px;
    text-underline-offset: 3px;
  }

  .menu_responsive {
    display: block;
    position: fixed;
    top: 10px;
    left: 10px;
    color: var(--text);
    z-index: 1002;
  }

  .menu_responsive .menu_toggle {
    padding: 10px 12px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 24px;
    color: var(--text);
    background-color: var(--bg);
    border: 1px solid var(--bg-soft);
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,.15);
    cursor: pointer;
  }

  .description.show {
    opacity: 1;
    transform: translateX(0);
  }

  i {
    display: inline-block;
  }

  .home_link {
    margin-right: 15px;
    padding: 3px;
  }

  .backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,.35);
    backdrop-filter: blur(1px);
    z-index: 1000;
  }
}
</style>
