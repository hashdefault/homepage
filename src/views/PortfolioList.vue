<template>
  <div class="description">
    <h2 class="page-title"><i class="fa fa-briefcase"></i> Projetos</h2>
    <p class="page-intro">Alguns dos projetos que desenvolvi ao longo da minha carreira. Cada um com seus desafios e aprendizados únicos.</p>

    <div class="portfolio-grid">
      <div class='portfolio-card'>
        <a href='https://news.bitsbylucas.com' target='_blank'>
          <div class="card-image">
            <img :src="work1" class='works'>
          </div>
          <div class="card-content">
            <h4>News Portal</h4>
            <p class="card-description">Portal de notícias com sistema de gerenciamento de conteúdo, categorias dinâmicas e interface responsiva.</p>
            <div class="card-tags">
              <span class="tag">PHP</span>
              <span class="tag">Laravel</span>
              <span class="tag">MySQL</span>
            </div>
            <span class="card-link">Visitar <i class="fa fa-external-link"></i></span>
          </div>
        </a>
      </div>

      <div class='portfolio-card'>
        <a href='https://psicologapolianaota.com.br' target='_blank'>
          <div class="card-image">
            <img :src="work2" class='works'>
          </div>
          <div class="card-content">
            <h4>Website Institucional</h4>
            <p class="card-description">Site profissional para psicóloga com informações sobre serviços, agendamento e contato direto.</p>
            <div class="card-tags">
              <span class="tag">Vue.js</span>
              <span class="tag">CSS3</span>
              <span class="tag">Responsivo</span>
            </div>
            <span class="card-link">Visitar <i class="fa fa-external-link"></i></span>
          </div>
        </a>
      </div>
    </div>

    <section class="github-section">
      <h3 class="section-title"><i class="fa-brands fa-github"></i> Mais no GitHub</h3>
      <p>Confira outros projetos, experimentos e contribuições open source no meu perfil do GitHub.</p>
      <a href="https://github.com/lugabrielbueno" target="_blank" class="github-btn">
        <i class="fa-brands fa-github"></i> Ver GitHub
      </a>
    </section>
  </div>
</template>
<script>

import work1 from "./../assets/images/portfolio/work1.png";
import work2 from "./../assets/images/portfolio/work2.png";

export default {
  name: "PortfolioList",
  mounted() { },

  data() {
    return {
      work1: work1,
      work2: work2
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=VT323&display=swap");

.description {
  padding: 25px;
  width: 50%;
  background-color: var(--bg);
  color: var(--text);
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.page-title {
  color: var(--text);
  font-size: 28px;
  margin-bottom: 5px;
  font-family: Nunito, sans-serif;
}

.page-title i {
  color: var(--accent);
  margin-right: 10px;
}

.page-intro {
  color: var(--text);
  opacity: 0.85;
  font-size: 16px;
  font-family: "Courier Prime", monospace;
  line-height: 1.5;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

.portfolio-card {
  background-color: var(--card);
  border: 1px solid var(--bg-soft);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.portfolio-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.portfolio-card a {
  text-decoration: none;
  display: block;
}

.card-image {
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid var(--bg-soft);
}

.works {
  width: 100%;
  height: 160px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.portfolio-card:hover .works {
  transform: scale(1.05);
}

.card-content {
  padding: 20px;
}

.card-content h4 {
  color: var(--text);
  font-size: 18px;
  font-family: Nunito, sans-serif;
  font-weight: 700;
  margin-bottom: 10px;
}

.card-description {
  color: var(--text);
  opacity: 0.85;
  font-size: 14px;
  font-family: "Courier Prime", monospace;
  line-height: 1.5;
  margin-bottom: 15px;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
}

.tag {
  background-color: var(--bg);
  color: var(--accent);
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 15px;
  font-family: "Courier Prime", monospace;
  border: 1px solid var(--bg-soft);
}

.card-link {
  color: var(--accent);
  font-size: 14px;
  font-family: Nunito, sans-serif;
  font-weight: 600;
}

.card-link i {
  margin-left: 5px;
  font-size: 12px;
}

/* GitHub Section */
.github-section {
  background-color: var(--card);
  border: 1px solid var(--bg-soft);
  border-radius: 12px;
  padding: 25px;
  text-align: center;
  margin-top: 10px;
}

.section-title {
  color: var(--text);
  font-size: 20px;
  font-family: Nunito, sans-serif;
  margin-bottom: 10px;
}

.section-title i {
  color: var(--accent);
  margin-right: 8px;
}

.github-section p {
  color: var(--text);
  opacity: 0.85;
  font-size: 14px;
  font-family: "Courier Prime", monospace;
  margin-bottom: 15px;
}

.github-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: var(--bg);
  color: var(--text);
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-family: Nunito, sans-serif;
  font-weight: 600;
  border: 1px solid var(--bg-soft);
  transition: border-color 0.3s ease, color 0.3s ease;
}

.github-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
}

@media (max-width: 1024px) {
  .description {
    width: 85%;
  }

  .portfolio-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .description {
    width: 90%;
    padding: 15px;
  }

  .page-title {
    font-size: 22px;
  }

  .works {
    height: 140px;
  }
}
</style>
