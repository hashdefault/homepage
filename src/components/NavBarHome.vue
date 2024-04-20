<template>
  <nav class="navbar" :class="{ filled: isFilled }">
    <div class="menu-list" :class="{ filled: isFilled }">
      <a class="bars-menu btn btn-link" id="bars-menu" @click="openMenu()"
        ><i class="fa fa-bars"></i
      ></a>
      <ul class="menu" :class="{ show: isOpen }">
        <li>
          <a class="btn btn-link" href="#"
            ><i class="fa fa-gear menu-icon"></i> Portfólio</a
          >
        </li>
        <li>
          <a class="btn btn-link" href="#"
            ><i class="fa fa-book menu-icon"></i> Referências</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavBarHome",
  data() {
    return {
      isOpen: false,
      isMenu: true,
      isFilled: false,
    };
  },
  methods: {
    openMenu() {
      this.isOpen = !this.isOpen;
      this.isFilled = !this.isFilled;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  color: white;
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  margin: 0;
  width: 100%;
}
.menu-list {
  background-color: rgba(200, 200, 200, 0.1);
}
.navbar ul li {
  color: white;
  list-style-type: none;
  display: inline-block;
  margin-left: 25px;
  padding: 5px;
}
i {
  padding-right: 3px;
}
.navbar ul li a {
  cursor: pointer;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}
a.btn-link {
  padding: 8px;
  border-radius: 8px;
}
a.btn-link:hover {
  text-decoration: underline;
}
.bars-menu {
  display: none;
  position: sticky;
}
@media (max-width: 768px) {
  nav {
    padding: 0;
    margin: 0;
    border-radius: 10px;
  }
  .menu {
    flex-direction: column;
    border-radius: 4px;
    display: none; /* Hide the menu items by default on smaller screens */
  }
  .menu li {
    text-align: center;
    padding: 2px;
  }
  .menu a {
    padding: 4px;
    margin-top: 2px;
  }
  .menu a:hover {
    text-decoration: underline;
  }
  .menu-icon {
    display: none;
  }
  .show {
    height: auto;
    display: flex;
    visibility: visible;
    transition: height 0.5s ease;
  }
  .filled {
    width: 100%;
    background-color: rgba(200, 200, 200, 0.1);
  }
  .bars-menu {
    display: flex;
    padding: 5px;
    background-color: rgba(200, 200, 200, 0.1);
    border-radius: 5px;
    text-decoration: none;
  }
  .bars-menu:hover {
    text-decoration: none;
  }
}
</style>
