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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  padding: 5px;
  float: right;
}
nav.navbar {
  font-weight: 600;
  color: white;
  display: block;
  text-align: right;
  width: 100%;
  background-color: rgb(80, 80, 80);
}
.menu-list {
  display: flex;
  flex-direction: row;
}
nav.navbar ul.menu li {
  color: white;
  padding: 2px 0px;
  display: flex;
  flex-direction: row;
  margin-left: 40px;
  justify-content: space-between;
}
i {
  padding-right: 3px;
}
nav.navbar ul.menu li a {
  cursor: pointer;
  color: white;
  text-decoration: none;
}
nav.navbar ul.menu a.btn-link {
  padding: 8px;
  border-radius: 8px;
  transition: all 500ms;
}
nav.navbar ul.menu a.btn-link:hover {
  background-color: rgba(140, 140, 140, 0.2);
}
#bars-menu {
  display: none;
  padding: 6px 7px;
}
.navbar ul.menu li.home {
  display: none;
}
@media (max-width: 768px) {
  .logo {
    display: none;
  }
  .navbar ul.menu li.home {
    display: flex;
  }
  .filled {
    width: 80%;
  }
  nav.navbar {
    padding: 2px;
    border-radius: 10px;
    display: flex;
  }
  #bars-menu {
    display: block;
    border-radius: 6px;
  }
  .menu-list {
    display: none;
    padding: 3px 3px;
    margin: 0;
    flex-direction: column;
    align-self: center;
    align-items: center;
    justify-content: center;
    width: 95%;
    font-size: 15px;
  }
  .show {
    display: flex;
  }
  ul.menu {
    margin: 0;
    padding: 2px 2px;
    border-radius: 10px;
    background-color: rgba(140, 140, 140, 0.2);
    border-left: 1px solid grey;
    border-bottom: 1px solid grey;
    display: flex;
    flex-direction: column;
  }
  ul.menu .menu-list li.links,
  ul.menu .menu-list li.home {
    padding: 0;
    margin: 0;
    justify-content: center;
    align-items: center;
    align-self: center;
    width: 100%;
  }

  a.btn-link,
  a.btn-link {
    width: 100%;
    padding: 5px 5px;
    margin: 0;
  }
}
</style>
