<template>
  <div class="foto">
    <RouterLink to="/"><img class="myfoto" :src="myfoto" /></RouterLink>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
<script>
import myfoto from "./../assets/images/me.png";
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
  width: 45%;
  text-align: center;
}
.myfoto {
  border-radius: 50%;
  height: 280px;
  width: 280px;
}
@media (max-width: 768px) {
  .foto {
    width: 100%;
  }
  .myfoto {
    border-radius: 50%;
    height: 200px;
    width: 200px;
  }
}
</style>
