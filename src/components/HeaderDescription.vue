<template>
  <div class="header-description">
    <div class="header-info">
      <h2>Lucas G. Bueno</h2>
      <p class="desc_name">Desenvolvedor Full Stack</p>
      <p class="desc_location"><i class="fa fa-map-marker-alt"></i> Maringá, PR - Brasil</p>
      <div class="header-tags">
        <span class="status-tag"><i class="fa fa-circle"></i> Disponível para projetos</span>
      </div>
    </div>
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
  align-items: center;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin: 40px 0;
  padding: 20px;
  background-color: var(--card);
  border: 1px solid var(--bg-soft);
  border-radius: 16px;
}

.header-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

h2 {
  font-size: 32px;
  font-family: Nunito, sans-serif;
  color: var(--text);
  margin: 0;
}

.desc_name {
  font-size: 18px;
  font-family: "Courier Prime", monospace;
  font-weight: 400;
  color: var(--accent);
  margin: 0;
}

.desc_location {
  font-size: 14px;
  font-family: "Courier Prime", monospace;
  color: var(--text);
  opacity: 0.7;
  margin: 5px 0;
}

.desc_location i {
  margin-right: 6px;
  color: var(--accent);
}

.header-tags {
  margin-top: 10px;
}

.status-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: var(--bg);
  color: var(--text);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-family: "Courier Prime", monospace;
  border: 1px solid var(--bg-soft);
}

.status-tag i {
  color: #00ff88;
  font-size: 8px;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}

.myfoto {
  border-radius: 50%;
  height: 120px;
  width: 120px;
  border: 3px solid var(--accent);
  transition: transform 0.3s ease;
}

.myfoto:hover {
  transform: scale(1.05);
}

@media (max-width: 1024px) {
  h2 {
    font-size: 24px;
    text-align: center;
  }

  .desc_name {
    font-size: 16px;
    text-align: center;
  }

  .desc_location {
    text-align: center;
  }

  .header-description {
    flex-direction: column-reverse;
    align-items: center;
    gap: 15px;
    padding: 20px 15px;
  }

  .header-info {
    align-items: center;
  }

  .myfoto {
    height: 100px;
    width: 100px;
  }
}
</style>
