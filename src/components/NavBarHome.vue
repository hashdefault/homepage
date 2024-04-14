<template>
  <nav class="navbar">
    <a class="bars-menu btn btn-link" id="bars-menu" @click="openMenu()"
      ><i class="fa fa-bars"></i
    ></a>
    <ul class="menu" :class="{ show: isOpen }">
      <li>
        <a class="btn btn-link" href="#"
          ><i class="fa fa-gear"></i> Portfólio</a
        >
      </li>
      <li>
        <a class="btn btn-link" href="#"
          ><i class="fa fa-book"></i> Referências</a
        >
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "NavBarHome",
  data() {
    return {
      isOpen: false,
      isMenu: true,
    };
  },
  methods: {
    openMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  color: white;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 5px;
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
  background-color: rgba(200, 200, 200, 0.1);
  text-decoration: underline;
}
.bars-menu {
  display: none;
  position: sticky;
}
@media (max-width: 768px) {
  nav {
    padding: 0px;
    background-color: rgba(200, 200, 200, 0.1);
    border-radius: 10px;
    justify-content: flex-start;
  }
  .menu {
    flex-direction: column;
    border-radius: 4px;
    display: none; /* Hide the menu items by default on smaller screens */
    justify-content: flex-start;
  }
  .menu li {
    text-align: left;
    padding: 2px;
  }
  .menu a {
    padding: 4px;
    margin-top: 2px;
  }
  .menu a:hover {
    text-decoration: underline;
  }
  .show {
    height: auto;
    display: block;
    visibility: visible;
    transition: height 0.5s ease;
  }
  .bars-menu {
    display: block;
    padding: 5px;
    background-color: rgba(200, 200, 200, 0.1);
    border-radius: 5px;
  }
}
</style>
