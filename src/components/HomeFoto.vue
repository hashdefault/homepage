<template>
  <div class="foto">
    <RouterLink to="/"><img class="myfoto" :src="myfoto" /></RouterLink>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
<script>
import myfoto from "./../assets/images/me2.png";
export default {
  name: "HomeFoto",
  data: function () {
    return {
      myfoto: myfoto,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.foto {
  width: 100%;
  text-align: left;
  background-color: rgb(80, 80, 80);
  border-left: 2px solid rgba(0, 255, 255, 0.7);
  display:flex;
  justify-content: space-between;
  flex-direction:row;
  flex-wrap: wrap;
}
.myfoto {
  border-radius: 50%;
  height: 220px;
  width: 220px;
  margin-left:50px
}
@media (max-width: 768px) {
  .myfoto {
    border-radius: 50%;
    height: 180px;
    width: 180px;
  }
}
</style>
