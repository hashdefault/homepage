<template>
  <div class='menu_responsive'>
    <a @click='showMenu()'><i class='fa fa-bars'></i></a>
  </div>
  <div :class="{ 'show': !toggleMenu }" class='description'>
    <RouterLink to="/" class="btn home_link"><img src='@/assets/monkey.webp' width='25'> <span>dev. lucas</span>
    </RouterLink>
    <RouterLink to="/portfolio" class="btn hovers"><i class='fa fa-briefcase'></i> Works </RouterLink>
    <RouterLink to="/posts" class="btn hovers"><i class='fa fa-book'></i> Posts </RouterLink>
    <RouterLink to="/techstack" class="btn hovers"><i class='fa fa-layer-group'></i> Tech Stack </RouterLink>
    <RouterLink to="/digitalarts" class="btn hovers"><i class='fa fa-pencil'></i> Digital Arts </RouterLink>
  </div>
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

  },
  data() {
    return {
      toggleMenu: true,
    };
  },
  methods: {
    showMenu() {
      this.toggleMenu = !this.toggleMenu
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
  background-color: rgb(22, 22, 22);
  margin: 25px 5px;
  text-align: center;
  width: 100%;
}

.home_link {
  color: white;
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
  color: white;
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
  background-color: rgb(0, 255, 255);
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
    align-items: self-start;
    width: 80%;
    top: 0;
    left: 0;
    padding: 10px;
    border-radius: 0px 0px 10px 10px;
    margin: 0px;
    background-color: rgb(50, 50, 50);
    opacity: 0;
    height: 0;
    transition: height linear 0.5s, opacity ease-in-out 0.2s;
  }
  .description a:nth-of-type(2){
    margin-top:20px;
  }

  .description .btn:first-of-type {
    align-self: center;
  }

  .hovers {
    font-size: 16px;
    margin: 10px;
    padding: 5px;
    text-underline-offset: 3px;
  }

  .menu_responsive {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    color: white;
    z-index:10;
  }

  .menu_responsive a {
    padding: 10px;
    display: flex;
    font-size: 35px;
    background-color: rgb(50, 50, 50);
    border-radius: 0 0 5px 5px;
  }

  .description.show {
    opacity: 1;
    height: 100%;
  }

  i {
    display: inline-block;
  }

  .home_link {
    margin-right: 15px;
    padding: 3px;
  }
}
</style>
