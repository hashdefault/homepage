<template>
  <div class="screen">
    <section class="sec sec--top">
      <SectionHeading
        eyebrow="Tech Stack"
        title="Ferramentas que uso no dia a dia"
        description="O conjunto que me permite ir do protótipo à produção com confiança."
        :rule="true"
      >
        <template #icon><Icon name="layers" /></template>
      </SectionHeading>
    </section>
    <div class="stack-cats">
      <Card v-for="(cat, i) in categories" :key="i" padding="lg" class="stack-cat">
        <div class="stack-cat__head">
          <span class="stack-cat__icon"><Icon :name="cat.icon" /></span>
          <div>
            <h4>{{ cat.title }}</h4>
            <p>{{ cat.desc }}</p>
          </div>
        </div>
        <div class="stack-cat__grid">
          <TechBadge
            v-for="(item, j) in cat.items"
            :key="j"
            :src="getImage(item.file)"
            :name="item.name"
          />
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import SectionHeading from '../components/ds/SectionHeading.vue';
import Card from '../components/ds/Card.vue';
import TechBadge from '../components/ds/TechBadge.vue';
import Icon from '../components/ds/Icon.vue';

export default {
  name: 'TechStackDescription',
  components: { SectionHeading, Card, TechBadge, Icon },
  data() {
    return {
      images: {},
      categories: [
        { icon: 'palette', title: 'Frontend', desc: 'Interfaces modernas e responsivas', items: [
          { name: 'Vue.js', file: 'Vue.js.png' },
          { name: 'JavaScript', file: 'JavaScript.png' },
          { name: 'NPM', file: 'NPM.png' },
        ]},
        { icon: 'server', title: 'Backend', desc: 'APIs, lógica de negócio e dados', items: [
          { name: 'PHP', file: 'PHP.png' },
          { name: 'Laravel', file: 'Laravel.png' },
          { name: 'Python', file: 'Python.png' },
          { name: 'Django', file: 'Django.png' },
          { name: 'MySQL', file: 'MySQL.png' },
          { name: 'PostgreSQL', file: 'PostgresSQL.png' },
        ]},
        { icon: 'box', title: 'DevOps & Ferramentas', desc: 'Infra, versionamento e automação', items: [
          { name: 'Docker', file: 'Docker.png' },
          { name: 'Git', file: 'Git.png' },
          { name: 'AWS', file: 'AWS.png' },
          { name: 'Composer', file: 'Composer.png' },
        ]},
        { icon: 'terminal', title: 'Ambiente', desc: 'Sistema operacional e editor', items: [
          { name: 'Arch Linux', file: 'ArchLinux.png' },
          { name: 'Ubuntu', file: 'Ubuntu.png' },
          { name: 'Neovim', file: 'Vim.png' },
          { name: 'Lua', file: 'Lua.png' },
        ]},
      ]
    };
  },
  created() {
    const context = require.context('@/assets/images/tech_icons', false, /\.png$/);
    this.images = context.keys().reduce((acc, key) => {
      acc[key.replace('./', '')] = context(key);
      return acc;
    }, {});
  },
  methods: {
    getImage(filename) {
      return this.images[filename] || '';
    }
  }
};
</script>

<style>
.stack-cats { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 36px; }
.stack-cat__head { display: flex; align-items: center; gap: 14px; margin-bottom: 20px; }
.stack-cat__icon { width: 42px; height: 42px; border-radius: var(--radius-md); background: var(--accent-tint); color: var(--accent); display: flex; align-items: center; justify-content: center; flex: none; }
.stack-cat__icon svg { width: 20px; height: 20px; }
.stack-cat__head h4 { font-family: var(--font-display); font-size: 18px; color: var(--text-strong); margin: 0; }
.stack-cat__head p { font-family: var(--font-mono); font-size: 12px; color: var(--text-muted); margin: 3px 0 0; }
.stack-cat__grid { display: flex; flex-wrap: wrap; gap: 12px; }

@media (max-width: 960px) {
  .stack-cats { grid-template-columns: 1fr; }
}
</style>
