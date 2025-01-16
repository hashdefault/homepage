<template>
  <nav class="navbar">
    <div class="logo">
      <RouterLink to="/"
        ><img :src="logo" class="logo" width="120" height="40"
      /></RouterLink>
    </div>
    <!--<ul class="menu" :class="{ filled: isFilled }">
      <a class="bars-menu btn" id="bars-menu" @click="openMenu()"
        ><i class="fa" :class="{ 'fa-bars': isBar, 'fa-times': !isTimes }"></i
      ></a>
      <div class="menu-list" :class="{ show: !isOpen }">
        <li class="home">
          <a class="btn btn-link" href="#"
            ><i class="fa fa-home menu-icon"></i> Início</a
          >
        </li>
        <li class="links">
          <a class="btn btn-link" href="#"
            ><i class="fa fa-gear menu-icon"></i> Portfólio</a
          >
        </li>
        <li class="links">
          <a class="btn btn-link" href="#"
            ><i class="fa fa-book menu-icon"></i> Referências</a
          >
        </li>
      </div>
    </ul> -->
  </nav>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
<script>
import logo from "./../assets/images/logo.png";
export default {
  name: "NavBarHome",
  data() {
    return {
      logo: logo,
      isOpen: true,
      isMenu: true,
      isBar: true,
      isTimes: true,
      isFilled: false,
    };
  },
  methods: {
    openMenu() {
      this.isOpen = !this.isOpen;
      this.isFilled = !this.isFilled;
      this.isBar = !this.isBar;
      this.isTimes = !this.isTimes;
    },
  },
};
</script>

<style scoped>
.logo {
  border-radius: 8px;
  padding: 1px;
  float: left;
}
nav.navbar {
  font-weight: 600;
  color: white;
  display: block;
  text-align: right;
  background-color: rgb(20, 20, 20);
}
i {
  padding-right: 3px;
}
@media (max-width: 768px) {
  .logo {
    display: none;
  }
  nav.navbar {
    padding: 2px;
    border-radius: 10px;
    display: flex;
    width:0%;
  }
}
</style>
