<template>
  <div class="header-description">
    <RouterLink to="/"><img class="myfoto" :src="myfoto" /></RouterLink>
    <h2>
      Lucas G. Bueno<br />
      <p class="desc_name">Desenvolvedor Full Stack</p>
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

<style scoped>
.header-description {
  background-color: rgb(22, 22, 22);
  color: white;
  display: flex;
  flex-direction: row;
  width: 55%;
  padding: 25px;
  justify-content: flex-start;
  margin: -1px;
}
h2 {
  font-size: 56px;
  width: 100%;
  margin-left: 90px;
  margin-top: 20px;
}
.desc_name {
  font-size: 22px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 400;
  margin-top: -5px;
}

.foto {
  width: 100%;
  text-align: left;
  background-color: rgb(22, 22, 22);
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
}
.myfoto {
  border-radius: 50%;
  height: 180px;
  width: 180px;
  margin-left: 50px;
}
@media (max-width: 1024px) {
  h2 {
    font-size: 40px;
    margin: 10px 0px;
    text-align: center;
    padding: 0;
  }
  .desc_name {
    font-size: 18px;
  }
  .header-description {
    flex-direction: column;
    align-items: center;
    align-self: center;
    background-color: rgb(22, 22, 22);
    width:80%;
  }
  .myfoto {
    border-radius: 50%;
    height: 110px;
    width: 110px;
    margin: 0px;
    padding: 0;
  }
}
</style>
