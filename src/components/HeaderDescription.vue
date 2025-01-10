<template>
  <div class="header-description">
    <RouterLink to="/"><img class="myfoto" :src="myfoto" /></RouterLink>
    <h2>
      Lucas G. Bueno<br />
      Desenvolvedor Fullstack
    </h2>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>

<script>
import myfoto from "./../assets/images/me2.png";
export default {
  name: "HeaderDescription",
  data: function () {
    return {
      myfoto: myfoto,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-description {
  background-color: rgb(80, 80, 80);
  color: white;
  display: flex;
  flex-direction: row;
  width: 65%;
  padding: 25px;
  border-left: 2px solid rgba(0, 255, 255, 0.7);
  justify-content: flex-start;
  margin: -1px;
}
h2 {
  font-size: 36px;
}

.foto {
  width: 100%;
  text-align: left;
  background-color: rgb(80, 80, 80);
  border-left: 2px solid rgba(0, 255, 255, 0.7);
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
}
.myfoto {
  border-radius: 50%;
  height: 220px;
  width: 220px;
  margin-left: 50px;
}
h2 {
  margin-left: 90px;
  margin-top: 50px;
}
@media (max-width: 1024px) {
  h2 {
    font-size: 20px;
    display: flex;
    align-items: center;
    align-self: center;
    margin: 10px 0px;
    text-align: center;;
    padding: 0;
  }
  .header-description {
    flex-direction: column;
    align-items: center;
    align-self: center;
    background-color: rgb(80, 80, 80);
  }
  .myfoto {
    border-radius: 50%;
    height: 140px;
    width: 140px;
    margin: 0px;
    padding: 0;
  }
}
</style>
