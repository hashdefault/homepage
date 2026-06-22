<template>
  <div class="screen">
    <section class="sec sec--top">
      <SectionHeading
        eyebrow="Works"
        title="Projetos selecionados"
        description="Trabalhos em produção — cada um com seus desafios e aprendizados."
        :rule="true"
      >
        <template #icon><Icon name="briefcase" /></template>
      </SectionHeading>
    </section>
    <div class="works-grid">
      <Card
        v-for="(p, i) in projects"
        :key="i"
        :media="p.media"
        :media-alt="p.title"
        :href="p.href"
      >
        <h4 class="work__title">{{ p.title }}</h4>
        <p class="work__desc">{{ p.desc }}</p>
        <div class="work__tags">
          <Tag v-for="(t, j) in p.tags" :key="j" :variant="j === 0 ? 'signal' : 'default'">{{ t }}</Tag>
        </div>
        <span class="work__link">Visitar <Icon name="arrow-up-right" /></span>
      </Card>
    </div>

    <section class="sec">
      <Card padding="lg" class="gh-cta">
        <div>
          <h3>Mais no GitHub</h3>
          <p>Outros projetos, experimentos e contribuições open source estão no perfil.</p>
        </div>
        <DsButton variant="secondary" size="lg" href="https://github.com/hashdefault">
          <template #iconLeft><Icon name="github" /></template>
          Ver GitHub
        </DsButton>
      </Card>
    </section>
  </div>
</template>

<script>
import SectionHeading from '../components/ds/SectionHeading.vue';
import Card from '../components/ds/Card.vue';
import Tag from '../components/ds/Tag.vue';
import DsButton from '../components/ds/Button.vue';
import Icon from '../components/ds/Icon.vue';
import work1 from '../assets/images/portfolio/work1.png';
import work2 from '../assets/images/portfolio/work2.png';

export default {
  name: 'PortfolioList',
  components: { SectionHeading, Card, Tag, DsButton, Icon },
  data() {
    return {
      projects: [
        {
          media: work1,
          title: 'News Portal',
          desc: 'Portal de notícias com sistema de gerenciamento de conteúdo, categorias dinâmicas e interface responsiva.',
          tags: ['PHP', 'Laravel', 'MySQL'],
          href: 'https://news.bitsbylucas.com'
        },
        {
          media: work2,
          title: 'Website Institucional',
          desc: 'Site profissional para psicóloga, com serviços, agendamento e contato direto.',
          tags: ['Vue.js', 'CSS3', 'Responsivo'],
          href: 'https://psicologapolianaota.com.br'
        }
      ]
    };
  }
};
</script>

<style>
.works-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 36px; }
.work__title { font-family: var(--font-display); font-size: 20px; color: var(--text-strong); margin: 0 0 10px; }
.work__desc { font-family: var(--font-body); font-size: 14.5px; color: var(--text-muted); line-height: 1.55; margin: 0 0 16px; }
.work__tags { display: flex; gap: 8px; margin-bottom: 18px; }
.work__link { display: inline-flex; align-items: center; gap: 6px; font-family: var(--font-display); font-weight: 600; font-size: 14px; color: var(--accent); }
.work__link svg { width: 15px; height: 15px; }
.gh-cta { display: flex; align-items: center; justify-content: space-between; gap: 24px; }
.gh-cta h3 { font-family: var(--font-display); font-size: 22px; color: var(--text-strong); margin: 0 0 6px; }
.gh-cta p { font-family: var(--font-body); color: var(--text-muted); margin: 0; max-width: 48ch; }

@media (max-width: 960px) {
  .works-grid { grid-template-columns: 1fr; }
  .gh-cta { flex-direction: column; text-align: center; }
}
</style>
