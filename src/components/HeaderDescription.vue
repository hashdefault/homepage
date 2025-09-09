<template>
  <div class="header-description">
    <h2>
      Lucas G. Bueno<br />
      <p class="desc_name">Desenvolvedor Full Stack</p>
    </h2>
    <RouterLink to="/"><img class="myfoto" :src="myfoto" /></RouterLink>
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
  background-color: var(--bg);
  color: var(--text);
  display: flex;
  align-items:center;
  align-self:center;
  align-content:center;
  flex-direction: row;
  width: 100%;
  justify-content:space-around;
  margin:40px 0 ;
}

h2 {
  font-size: 35px;
}

.desc_name {
  font-size: 18px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 400;
  margin-top: -5px;
}


.myfoto {
  border-radius: 50%;
  height: 130px;
  width: 130px;
  border: 2px solid var(--text);
}

@media (max-width: 1024px) {
  h2 {
    font-size: 26px;
    margin: 10px 0px;
    text-align: center;
    padding: 0;
  }

  .desc_name {
    font-size: 15px;
  }

  .header-description {
    flex-direction: column;
    align-items: center;
    align-self: center;
    background-color: var(--bg);
    width: 70%;
  }

  .myfoto {
    border-radius: 50%;
    height: 90px;
    width: 90px;
    margin: 0px;
    padding: 0;
  }
}
</style>
