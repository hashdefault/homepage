<template>
  <div class="posts-container">
    <div class='content_menu' id='content_menu'>
      <h4>Conteudo</h4>
      <ul>
        <li class='links_ref'>
          <a @click="updateContent('hypreww')"> Hypreww Desktop </a>
        </li>
        <li class='links_ref'>
          <a @click="updateContent('notetaking')"> Como tomar notas ? </a>
        </li>
      </ul>
    </div>
    <div class="description">
      <article id='ref_id' v-if="renderedContent" v-html="renderedContent">
      </article>
      <p v-else-if="isLoading" class="post-status">Carregando post...</p>
      <p v-else-if="loadError" class="post-status post-error">{{ loadError }}</p>
    </div>
  </div>
</template>
<script>
import { marked } from "marked"
export default {
  name: "WritingPosts",

  async mounted() {
    await this.loadContent();
  },
  data() {
    return {
      page: 'notetaking',
      renderedContent: '',
      isLoading: false,
      loadError: ''
    };
  },
  watch: {
    page() {
      this.loadContent(); // Reload content when `page` changes
    },
  },
  methods: {
    async loadContent() {
      if (!this.page) return;
      this.isLoading = true;
      this.loadError = '';
      this.renderedContent = '';

      const contentBase = `/postscontent/${this.page}/`;
      const postUrl = `${contentBase}index.md`;

      try {
        const response = await fetch(postUrl);
        if (!response.ok) throw new Error(`Failed to fetch ${postUrl}: ${response.status}`);

        var text = await response.text();
        if (/^\s*<!doctype html|^\s*<html/i.test(text)) {
          throw new Error(`Expected markdown at ${postUrl}, but received HTML`);
        }

        text = text.replace(/!\[([^\]]*)\]\(\.\/(.*?)\)/g, (match, alt, path) => {
          return `![${alt}](${contentBase}${path})`;
        });
        this.renderedContent = marked(text);
        this.$nextTick(() => {
          const links = document.querySelectorAll("div.description article a");
          for (const link of links) {
            if (link.href.startsWith('https://')) {
              link.target = '_blank';
            }
          }
        });
      } catch (error) {
        console.error("Error loading post:", error);
        this.loadError = "Nao foi possivel carregar este post.";
      } finally {
        this.isLoading = false;
      }
    },
    updateContent(name) {
      this.page = name;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=VT323&display=swap");

.posts-container {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--bg);
  padding: 25px;
}

.content_menu {
  color: var(--text);
  border-left: 4px solid var(--bg-soft);
  font-size: 17px;
  width: 100%;
}

.content_menu h4 {
  margin: 0;
  margin-top: 5px;
  margin-left: 20px;
  font-size: 24px;
}

.content_menu ul {
  padding: 5px;
}

.content_menu li.links_ref {
  list-style: none;
  border-left: 2px solid var(--accent);
  margin: 10px;
  padding: 5px;
  padding-left: 15px;
  line-height: 15px;

}

.content_menu li.links_ref a:hover {
  color: var(--accent);
}

.content_menu li.links_ref a {
  cursor: pointer;
  color: var(--text);
  text-decoration: none;
}

.posts-container .description {
  width: 100%;
  margin-top: 30px;
}

.post-status {
  color: var(--text);
  padding: 25px;
}

.post-error {
  border-left: 4px solid var(--accent);
  background-color: var(--card);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 1s ease-in forwards;
}


div.description article {
  padding: 25px;
  color: var(--text);
  font-family: "Arial";
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: var(--bg);
  margin: -1px;
  transition: opacity 2s ease-in-out;
}


div.description article img {
  width: 100%;
  min-height: 20px;
}

div.description article h2 {
  border-left: 4px solid var(--accent);
  padding-left: 10px;

}

div.description article h3 {
  background-color: var(--bg-soft);
  padding: 8px;
  border-radius: 3px;
  border-left: 4px solid var(--accent);
  padding-left: 10px;
  font-weight: 400;
  width: 99%;
}

div.description article a:hover {
  text-decoration: underline;
}

div.description article a {
  text-decoration: none;
  color: var(--accent);
}

div.description article blockquote {
  border-left: 5px solid var(--accent);
  padding-left: 20px;
  background-color: var(--card);
  width: 99%;
  margin-left: 2px;
  margin-right: 2px;
  max-height: 500px;
  overflow-y: auto;
  border-radius: 3px;

}

div.description article li {
  padding: 4px;
}

div.description article li {
  list-style: none;
}

@media (max-width: 1024px) {
  .posts-container {
    width: 85%;
  }
}

@media (max-width: 768px) {
  .posts-container {
    width: 90%;
    padding: 15px;
  }
}
</style>
