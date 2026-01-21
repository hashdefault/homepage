<template>
  <div class="description">
    <div class="banner_desc">
      <p><i class="fa-brands fa-linux"></i> i use arch, btw</p>
    </div>
    <HeaderDescription />

    <section class="about-section">
      <h3 class="subtitle"><i class="fa fa-terminal"></i> Sobre mim</h3>
      <p class="about-text">
        {{ displayedTextFirst }}
      </p>
    </section>

    <section class="highlights-section">
      <h3 class="subtitle"><i class="fa fa-rocket"></i> O que eu faço</h3>
      <div class="highlights-grid">
        <div class="highlight-card">
          <i class="fa fa-code highlight-icon"></i>
          <h4>Desenvolvimento Web</h4>
          <p>Criação de websites e sistemas web completos, do frontend ao backend, com foco em performance e usabilidade.</p>
        </div>
        <div class="highlight-card">
          <i class="fa fa-server highlight-icon"></i>
          <h4>Backend & APIs</h4>
          <p>Desenvolvimento de APIs RESTful, integração de sistemas e arquitetura de aplicações com PHP, Python e Laravel.</p>
        </div>
        <div class="highlight-card">
          <i class="fa-brands fa-linux highlight-icon"></i>
          <h4>Linux & DevOps</h4>
          <p>Configuração de servidores, deploy de aplicações, Docker e automação de processos em ambientes Linux.</p>
        </div>
      </div>
    </section>

    <section class="interests-section">
      <h3 class="subtitle"><i class="fa fa-heart"></i> Interesses</h3>
      <div class="interests-list">
        <span class="interest-tag"><i class="fa fa-heart"></i> Linux universe</span>
        <span class="interest-tag"><i class="fa fa-book-open"></i> Open Source</span>
        <span class="interest-tag"><i class="fa fa-keyboard"></i> Vim/Neovim</span>
        <span class="interest-tag"><i class="fa fa-terminal"></i> CLI tools</span>
        <span class="interest-tag"><i class="fa fa-music"></i> Folk & Rock</span>
        <span class="interest-tag"><i class="fa fa-book"></i> Leitura</span>
      </div>
    </section>

    <section class="resources-section">
      <h3 class="subtitle"><i class="fa fa-bookmark"></i> Recursos Úteis</h3>
      <div class="resources-grid">
        <a class='resource-link' href="https://learnxinyminutes.com/" target='_blank'>
          <i class="fa fa-book"></i>
          <span>Learn X in Y Minutes</span>
          <small>Aprenda linguagens rapidamente</small>
        </a>
        <a class="resource-link" href="https://github.com/kamranahmedse/developer-roadmap" target="_blank">
          <i class="fa-brands fa-github"></i>
          <span>Developer Roadmap</span>
          <small>Guias de carreira para devs</small>
        </a>
        <a class="resource-link" href="https://roadmap.sh" target="_blank">
          <i class="fa fa-map"></i>
          <span>Roadmap.sh</span>
          <small>Trilhas de aprendizado</small>
        </a>
        <a class="resource-link" href="https://www.freecodecamp.org/" target="_blank">
          <i class="fa fa-graduation-cap"></i>
          <span>freeCodeCamp</span>
          <small>Aprenda a programar grátis</small>
        </a>
      </div>
    </section>
  </div>
</template>
<script>
import HeaderDescription from "./../components/HeaderDescription.vue";
export default {
  name: "HomeDescription",
  mounted() {
    this.startTypingFirst();
  },
  components: {
    HeaderDescription

  },
  data() {
    return {
      fullTextFirst:
        //"Minha jornada no mundo da programação começou na universidade, enquanto eu estava até o pescoço nas aulas de Física. Foi como tropeçar em um universo totalmente novo. Avançando para 2020, me vi mergulhando de cabeça no cenário tecnológico, trabalhando como desenvolvedor full-stack em uma empresa privada. Ser um desenvolvedor full-stack significa ter muitas funções, mas neste universo as vezes precisamos abraçar o caos e perseguir esses sonhos, uma linha de código de cada vez! 🚀 ",
        `Lucas é um desenvolvedor de software que atualmente reside na cidade de Maringá, no estado do Paraná. 
        Sua trajetória na tecnologia começou em 2019, enquanto estudava Python para análises de dados, unindo seu interesse em resolver problemas práticos à aplicação de ferramentas para solução de problemas matemáticos.
No ano seguinte, em 2020, ampliou seus horizontes ao iniciar estudos em desenvolvimento web,
explorando tecnologias e linguagens como PHP, Javascript e frameworks como Django e Laravel.
      Esse novo foco o levou a ingressar em uma empresa, onde desde então atua na manutenção e desenvolvimento de websites e sistemas. Sua experiência e paixão pelo mundo linux são uma peça fundamental na carreira.`,
      fullTextSecond: "",
      //"Sou apaixonado por músicas como folk, clássica, rock e soul. As músicas instrumentais me ajudam a relaxar, enquanto as composições clássicas me oferecem uma elegância atemporal. A energia visceral do rock alimenta minha paixão, e os vocais do Soul falam à minha alma. Me sinto enriquecido por cada um desses gêneros. Livros, cinema e arte são parte de interesses dos quais eu vejo sendo fundamentais a experiência humana.",
      displayedTextFirst: "",
      typingSpeed: 50,
    };
  },

  methods: {
    startTypingFirst() {
      this.displayedTextFirst = "";
      let index = 0;
      const interval = setInterval(() => {
        if (index < this.fullTextFirst.length) {
          this.displayedTextFirst += this.fullTextFirst[index];
          index++;
        } else {
          clearInterval(interval); // Stop typing when the full text is displayed
        }
      }, this.typingSpeed);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=VT323&display=swap");

.description {
  width: 50%;
  padding: 25px;
  background-color: var(--bg);
  margin: -1px;
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 30px;
}

section {
  width: 100%;
}

.subtitle {
  color: var(--text);
  text-decoration-line: underline;
  text-decoration-thickness: 3px;
  text-underline-offset: 6px;
  text-decoration-color: var(--accent);
  margin-bottom: 15px;
  font-size: 22px;
}

.subtitle i {
  color: var(--accent);
  margin-right: 8px;
}

.banner_desc {
  text-align: center;
  width: 100%;
  background-color: var(--bg);
}

.banner_desc p {
  text-align: center;
  padding: 12px 20px;
  width: 100%;
  background-color: var(--card);
  border-radius: 10px;
  border: 1px solid var(--bg-soft);
  color: var(--text);
  font-size: 16px;
  font-family: "Courier Prime", monospace;
}

.banner_desc p i {
  margin-right: 8px;
  color: var(--accent);
}

/* About Section */
.about-text {
  font-family: "Courier Prime", monospace;
  color: var(--text);
  line-height: 1.7;
  font-size: 16px;
  text-align: justify;
}

.about-text::after {
  content: "|";
  font-weight: bold;
  display: inline-block;
  animation: blink 0.6s steps(2, start) infinite;
}

/* Highlights Section */
.highlights-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.highlight-card {
  background-color: var(--card);
  border: 1px solid var(--bg-soft);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.highlight-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent);
}

.highlight-icon {
  font-size: 32px;
  color: var(--accent);
  margin-bottom: 12px;
}

.highlight-card h4 {
  color: var(--text);
  font-size: 16px;
  margin-bottom: 10px;
  font-family: Nunito, sans-serif;
}

.highlight-card p {
  color: var(--text);
  font-size: 14px;
  line-height: 1.5;
  opacity: 0.85;
  font-family: "Courier Prime", monospace;
}

/* Interests Section */
.interests-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.interest-tag {
  background-color: var(--card);
  border: 1px solid var(--bg-soft);
  color: var(--text);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-family: "Courier Prime", monospace;
  transition: border-color 0.3s ease, background-color 0.3s ease;
}

.interest-tag:hover {
  border-color: var(--accent);
}

.interest-tag i {
  color: var(--accent);
  margin-right: 6px;
}

/* Resources Section */
.resources-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.resource-link {
  display: flex;
  flex-direction: column;
  background-color: var(--card);
  border: 1px solid var(--bg-soft);
  border-radius: 10px;
  padding: 15px;
  text-decoration: none;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.resource-link:hover {
  transform: translateY(-3px);
  border-color: var(--accent);
}

.resource-link i {
  font-size: 24px;
  color: var(--accent);
  margin-bottom: 8px;
}

.resource-link span {
  color: var(--text);
  font-size: 15px;
  font-weight: 600;
  font-family: Nunito, sans-serif;
}

.resource-link small {
  color: var(--text);
  opacity: 0.7;
  font-size: 12px;
  margin-top: 4px;
  font-family: "Courier Prime", monospace;
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  50.1%, 100% {
    opacity: 0;
  }
}

@media (max-width: 1024px) {
  .description {
    width: 85%;
  }

  .highlights-grid {
    grid-template-columns: 1fr;
  }

  .resources-grid {
    grid-template-columns: 1fr;
  }

  .subtitle {
    font-size: 18px;
  }
}

@media (max-width: 768px) {
  .description {
    width: 90%;
    padding: 15px;
  }

  .highlight-card {
    padding: 15px;
  }

  .interest-tag {
    font-size: 12px;
    padding: 6px 12px;
  }
}
</style>
