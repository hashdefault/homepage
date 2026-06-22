<template>
  <div class="screen">
    <section class="sec sec--top">
      <SectionHeading eyebrow="Posts" title="Anotações e artigos" :rule="true">
        <template #icon><Icon name="book-open" /></template>
      </SectionHeading>
    </section>

    <div class="posts-layout">
      <aside class="posts-nav">
        <h4 class="posts-nav__title">Conteúdo</h4>
        <ul class="posts-nav__list">
          <li v-for="item in menu" :key="item.slug">
            <a
              :class="['posts-nav__link', page === item.slug ? 'posts-nav__link--active' : '']"
              @click="updateContent(item.slug)"
            >{{ item.label }}</a>
          </li>
        </ul>
      </aside>

      <article v-if="renderedContent" class="posts-article" v-html="renderedContent" />
      <p v-else-if="isLoading" class="posts-status">Carregando post...</p>
      <p v-else-if="loadError" class="posts-status posts-error">{{ loadError }}</p>
    </div>
  </div>
</template>

<script>
import { marked } from 'marked';
import SectionHeading from '../components/ds/SectionHeading.vue';
import Icon from '../components/ds/Icon.vue';

export default {
  name: 'PostsWrite',
  components: { SectionHeading, Icon },
  data() {
    return {
      page: 'notetaking',
      renderedContent: '',
      isLoading: false,
      loadError: '',
      menu: [
        { slug: 'hypreww', label: 'Hypreww Desktop' },
        { slug: 'notetaking', label: 'Como tomar notas ?' },
      ]
    };
  },
  async mounted() {
    await this.loadContent();
  },
  watch: {
    page() { this.loadContent(); }
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

        let text = await response.text();
        if (/^\s*<!doctype html|^\s*<html/i.test(text)) {
          throw new Error(`Expected markdown at ${postUrl}, but received HTML`);
        }

        text = text.replace(/!\[([^\]]*)\]\(\.\/(.*?)\)/g, (match, alt, path) => {
          return `![${alt}](${contentBase}${path})`;
        });
        this.renderedContent = marked(text);
        this.$nextTick(() => {
          const links = document.querySelectorAll('.posts-article a');
          for (const link of links) {
            if (link.href.startsWith('https://')) link.target = '_blank';
          }
        });
      } catch (error) {
        this.loadError = 'Não foi possível carregar este post.';
      } finally {
        this.isLoading = false;
      }
    },
    updateContent(name) {
      this.page = name;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};
</script>

<style>
.posts-layout {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 32px;
  margin-top: 36px;
}

.posts-nav {
  position: sticky;
  top: 80px;
  align-self: start;
}

.posts-nav__title {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--text-faint);
  text-transform: uppercase;
  letter-spacing: var(--tracking-eyebrow);
  margin: 0 0 12px;
}

.posts-nav__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.posts-nav__link {
  display: block;
  padding: 8px 12px;
  font-family: var(--font-display);
  font-size: var(--text-sm);
  color: var(--text-muted);
  border-radius: var(--radius-sm);
  border-left: 2px solid var(--border);
  cursor: pointer;
  transition: color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out);
}

.posts-nav__link:hover {
  color: var(--text-strong);
  background: var(--surface-hover);
}

.posts-nav__link--active {
  color: var(--accent);
  border-color: var(--accent);
}

.posts-status {
  color: var(--text-muted);
  padding: 24px;
}

.posts-error {
  border-left: 3px solid var(--accent);
  background: var(--surface-card);
  border-radius: var(--radius-md);
  padding: 16px 20px;
}

.posts-article {
  color: var(--text-body);
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
  max-width: var(--container-narrow);
}

.posts-article h2 {
  border-left: 3px solid var(--accent);
  padding-left: 12px;
  margin-top: 32px;
}

.posts-article h3 {
  background: var(--surface-card);
  padding: 10px 14px;
  border-radius: var(--radius-sm);
  border-left: 3px solid var(--accent);
  font-weight: var(--weight-medium);
  margin-top: 24px;
}

.posts-article a { color: var(--accent); }
.posts-article a:hover { text-decoration: underline; }

.posts-article img {
  width: 100%;
  border-radius: var(--radius-md);
  margin: 16px 0;
}

.posts-article blockquote {
  border-left: 3px solid var(--accent);
  padding: 12px 20px;
  background: var(--surface-card);
  border-radius: var(--radius-sm);
  margin: 16px 0;
  max-height: 500px;
  overflow-y: auto;
}

.posts-article li { padding: 4px 0; }

.posts-article code {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  background: var(--surface-raised);
  padding: 2px 6px;
  border-radius: var(--radius-xs);
}

.posts-article pre {
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 16px;
  overflow-x: auto;
}

.posts-article pre code {
  background: transparent;
  padding: 0;
}

@media (max-width: 768px) {
  .posts-layout {
    grid-template-columns: 1fr;
  }
  .posts-nav {
    position: static;
  }
}
</style>
