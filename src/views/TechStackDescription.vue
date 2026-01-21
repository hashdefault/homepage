<template>
  <div class="description">
    <h2 class="page-title"><i class="fa fa-layer-group"></i> Tech Stack</h2>
    <p class="page-intro">Ferramentas e tecnologias que utilizo no dia a dia para construir soluções web.</p>

    <div class="tech-categories">
      <!-- Frontend -->
      <div class="tech-category">
        <h3 class="category-title"><i class="fa fa-palette"></i> Frontend</h3>
        <p class="category-desc">Interfaces modernas e responsivas</p>
        <div class="tech-icons">
          <div class="tech-item" v-for="tech in frontend" :key="tech.name">
            <img :src="getImage(tech.image)" :alt="tech.name" />
            <span class="tech-name">{{ tech.name }}</span>
          </div>
        </div>
      </div>

      <!-- Backend -->
      <div class="tech-category">
        <h3 class="category-title"><i class="fa fa-server"></i> Backend</h3>
        <p class="category-desc">APIs, lógica de negócio e banco de dados</p>
        <div class="tech-icons">
          <div class="tech-item" v-for="tech in backend" :key="tech.name">
            <img :src="getImage(tech.image)" :alt="tech.name" />
            <span class="tech-name">{{ tech.name }}</span>
          </div>
        </div>
      </div>

      <!-- DevOps & Tools -->
      <div class="tech-category">
        <h3 class="category-title"><i class="fa fa-tools"></i> DevOps & Ferramentas</h3>
        <p class="category-desc">Infraestrutura, versionamento e automação</p>
        <div class="tech-icons">
          <div class="tech-item" v-for="tech in devops" :key="tech.name">
            <img :src="getImage(tech.image)" :alt="tech.name" />
            <span class="tech-name">{{ tech.name }}</span>
          </div>
        </div>
      </div>

      <!-- Environment -->
      <div class="tech-category">
        <h3 class="category-title"><i class="fa-brands fa-linux"></i> Ambiente</h3>
        <p class="category-desc">Sistema operacional e editor de código</p>
        <div class="tech-icons">
          <div class="tech-item" v-for="tech in environment" :key="tech.name">
            <img :src="getImage(tech.image)" :alt="tech.name" />
            <span class="tech-name">{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <section class="learning-section">
      <h3 class="section-title"><i class="fa fa-book-open"></i> Sempre aprendendo</h3>
      <p>A tecnologia está em constante evolução. Estou sempre explorando novas ferramentas, linguagens e frameworks para me manter atualizado e entregar soluções cada vez melhores.</p>
    </section>
  </div>
</template>
<script>
export default {
  name: "TechStackDescription",
  mounted() {},

  data() {
    return {
      images: {},
      frontend: [
        { name: "Vue.js", image: "Vue.js.png" },
        { name: "JavaScript", image: "JavaScript.png" },
        { name: "NPM", image: "NPM.png" },
        { name: "jQuery", image: "jQuery.png" },
      ],
      backend: [
        { name: "PHP", image: "PHP.png" },
        { name: "Laravel", image: "Laravel.png" },
        { name: "Python", image: "Python.png" },
        { name: "Django", image: "Django.png" },
        { name: "Lua", image: "Lua.png" },
        { name: "Composer", image: "Composer.png" },
      ],
      devops: [
        { name: "Docker", image: "Docker.png" },
        { name: "Git", image: "Git.png" },
        { name: "AWS", image: "AWS.png" },
      ],
      environment: [
        { name: "Arch Linux", image: "ArchLinux.png" },
        { name: "Ubuntu", image: "Ubuntu.png" },
        { name: "Neovim", image: "Vim.png" },
      ],
    };
  },
  created() {
    this.importImages();
  },
  props: {
    isTechStackActive: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    importImages() {
      const context = require.context(
        "@/assets/images/tech_icons",
        false,
        /\.png$/
      );
      this.images = context.keys().reduce((images, key) => {
        const fileName = key.replace("./", "");
        images[fileName] = context(key);
        return images;
      }, {});
    },
    getImage(imageName) {
      return this.images[imageName] || "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=VT323&display=swap");

.description {
  display: flex;
  padding: 25px;
  width: 50%;
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--bg);
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

.tech-categories {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.tech-category {
  background-color: var(--card);
  border: 1px solid var(--bg-soft);
  border-radius: 12px;
  padding: 20px;
}

.category-title {
  color: var(--text);
  font-size: 18px;
  font-family: Nunito, sans-serif;
  margin-bottom: 5px;
}

.category-title i {
  color: var(--accent);
  margin-right: 8px;
}

.category-desc {
  color: var(--text);
  opacity: 0.7;
  font-size: 13px;
  font-family: "Courier Prime", monospace;
  margin-bottom: 15px;
}

.tech-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 10px;
  border-radius: 10px;
  transition: transform 0.3s ease, background-color 0.3s ease;
  min-width: 70px;
}

.tech-item:hover {
  transform: translateY(-3px);
  background-color: var(--bg);
}

.tech-item img {
  width: 45px;
  height: 45px;
  background-color: var(--text);
  border-radius: 12px;
  padding: 6px;
}

.tech-name {
  color: var(--text);
  font-size: 12px;
  font-family: "Courier Prime", monospace;
  text-align: center;
}

/* Learning Section */
.learning-section {
  background-color: var(--card);
  border: 1px solid var(--bg-soft);
  border-radius: 12px;
  padding: 25px;
  text-align: center;
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

.learning-section p {
  color: var(--text);
  opacity: 0.85;
  font-size: 14px;
  font-family: "Courier Prime", monospace;
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .description {
    width: 85%;
  }

  .tech-item img {
    width: 38px;
    height: 38px;
  }

  .tech-name {
    font-size: 11px;
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

  .tech-category {
    padding: 15px;
  }

  .tech-item {
    min-width: 60px;
    padding: 8px;
  }

  .tech-item img {
    width: 32px;
    height: 32px;
    padding: 4px;
  }

  .tech-icons {
    gap: 10px;
  }
}
</style>
