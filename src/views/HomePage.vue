<template>
  <div class="screen">
    <!-- Hero -->
    <section class="hero">
      <div class="hero__copy">
        <span class="ds-eyebrow">// FULL STACK DEVELOPER · MARINGÁ, PR</span>
        <h1 class="hero__title">Oi, sou Lucas. <span class="accent">Desenvolvedor de software</span>.</h1>
        <p class="hero__sub">Desenvolvedor full stack com foco em PHP, Laravel, Python e Vue. Do banco de dados à interface — com atenção a performance, manutenção e clareza.</p>
        <div class="hero__badge">
          <Badge status="available">Disponível para projetos</Badge>
        </div>
        <div class="hero__cta">
          <DsButton variant="primary" size="lg" @click="$router.push('/portfolio')">
            <template #iconRight><Icon name="arrow-right" /></template>
            Ver projetos
          </DsButton>
          <DsButton variant="secondary" size="lg" @click="$router.push('/contato')">
            <template #iconLeft><Icon name="mail" /></template>
            Entrar em contato
          </DsButton>
        </div>
        <div class="hero__social">
          <SocialLink label="GitHub" handle="@hashdefault" href="https://github.com/hashdefault">
            <template #icon><Icon name="github" /></template>
          </SocialLink>
          <SocialLink label="LinkedIn" href="https://www.linkedin.com/in/lucas-g-bueno/">
            <template #icon><Icon name="linkedin" /></template>
          </SocialLink>
        </div>
      </div>
      <div class="hero__aside">
        <div class="hero__portrait">
          <Avatar :src="photo" size="lg" ring status />
          <div>
            <div class="hero__name">Lucas G. Bueno</div>
            <div class="hero__role">Full Stack Developer</div>
          </div>
        </div>
        <Terminal title="lucas@arch:~" :caret="true" :lines="termLines" />
      </div>
    </section>

    <!-- O que eu faço -->
    <section class="sec">
      <SectionHeading eyebrow="O que eu faço" title="Três frentes, um padrão de qualidade" :rule="true">
        <template #icon><Icon name="rocket" /></template>
      </SectionHeading>
      <div class="grid-3">
        <Card v-for="hl in highlights" :key="hl.title" accent padding="lg" class="home-hl">
          <div class="home-hl__icon"><Icon :name="hl.icon" /></div>
          <h4>{{ hl.title }}</h4>
          <p>{{ hl.body }}</p>
        </Card>
      </div>
    </section>

    <!-- Sobre mim -->
    <section class="sec">
      <SectionHeading eyebrow="Sobre mim" title="Trajetória">
        <template #icon><Icon name="user" /></template>
      </SectionHeading>
      <div class="about">
        <p>Minha trajetória na tecnologia começou em 2019, estudando Python para análise de dados — unindo o gosto por resolver problemas práticos à aplicação de ferramentas matemáticas.</p>
        <p>No ano seguinte ampliei o foco para desenvolvimento web, explorando PHP, JavaScript e frameworks como Django e Laravel. Desde então atuo na manutenção e no desenvolvimento de websites e sistemas, com o universo Linux como base da carreira.</p>
      </div>
    </section>

    <!-- Interesses -->
    <section class="sec">
      <SectionHeading eyebrow="Interesses" title="Fora do editor">
        <template #icon><Icon name="heart" /></template>
      </SectionHeading>
      <div class="tags">
        <Tag v-for="tag in interests" :key="tag.label" variant="solid" pill>
          <template #icon><Icon :name="tag.icon" /></template>
          {{ tag.label }}
        </Tag>
      </div>
    </section>
  </div>
</template>

<script>
import DsButton from '../components/ds/Button.vue';
import Badge from '../components/ds/Badge.vue';
import SocialLink from '../components/ds/SocialLink.vue';
import Avatar from '../components/ds/Avatar.vue';
import Terminal from '../components/ds/Terminal.vue';
import SectionHeading from '../components/ds/SectionHeading.vue';
import Card from '../components/ds/Card.vue';
import Tag from '../components/ds/Tag.vue';
import Icon from '../components/ds/Icon.vue';
import photo from '../assets/images/me2.png';

export default {
  name: 'HomePage',
  components: { DsButton, Badge, SocialLink, Avatar, Terminal, SectionHeading, Card, Tag, Icon },
  data() {
    return {
      photo,
      termLines: [
        { type: 'comment', text: 'sobre mim' },
        { type: 'cmd', text: 'whoami' },
        { type: 'out', text: 'Lucas G. Bueno' },
        { type: 'cmd', text: 'cat stack.txt' },
        { type: 'out', text: 'PHP · Laravel · Python · Vue · Docker' },
        { type: 'cmd', text: 'uname -o' },
        { type: 'out', text: 'GNU/Linux — Arch' },
        { type: 'cmd', text: 'status --now' },
      ],
      highlights: [
        { icon: 'code-xml', title: 'Desenvolvimento Web', body: 'Websites e sistemas completos, do frontend ao backend, com foco em performance e usabilidade.' },
        { icon: 'server', title: 'Backend & APIs', body: 'APIs RESTful, integração de sistemas e arquitetura de aplicações com PHP, Python e Laravel.' },
        { icon: 'terminal', title: 'Linux & DevOps', body: 'Configuração de servidores, deploy, Docker e automação de processos em ambientes Linux.' },
      ],
      interests: [
        { icon: 'terminal', label: 'Linux universe' },
        { icon: 'git-branch', label: 'Open Source' },
        { icon: 'keyboard', label: 'Vim / Neovim' },
        { icon: 'square-terminal', label: 'CLI tools' },
        { icon: 'music', label: 'Folk & Rock' },
        { icon: 'book-open', label: 'Leitura' },
      ]
    };
  }
};
</script>

<style>
.hero { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 56px; align-items: center; padding-top: 64px; }
.hero__title { font-size: clamp(38px, 5vw, 60px); line-height: 1.04; letter-spacing: -0.03em; margin: 18px 0 0; }
.hero__title .accent { color: var(--accent); }
.hero__sub { font-family: var(--font-body); color: var(--text-muted); font-size: 18px; line-height: 1.6; max-width: 52ch; margin-top: 22px; }
.hero__badge { margin-top: 24px; }
.hero__cta { display: flex; gap: 14px; margin-top: 28px; flex-wrap: wrap; }
.hero__social { display: flex; gap: 12px; margin-top: 24px; }
.hero__aside { display: flex; flex-direction: column; gap: 20px; }
.hero__portrait { display: flex; align-items: center; gap: 16px; padding: 16px 20px; background: var(--surface-card); border: 1px solid var(--border); border-radius: var(--radius-lg); }
.hero__name { font-family: var(--font-display); font-weight: 700; font-size: 19px; color: var(--text-strong); }
.hero__role { font-family: var(--font-mono); font-size: 12px; color: var(--accent); margin-top: 2px; }

.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 32px; }
.home-hl { display: flex; flex-direction: column; }
.home-hl__icon { width: 44px; height: 44px; border-radius: var(--radius-md); background: var(--accent-tint); color: var(--accent); display: flex; align-items: center; justify-content: center; margin-bottom: 16px; }
.home-hl__icon svg { width: 22px; height: 22px; }
.home-hl h4 { font-family: var(--font-display); font-size: 18px; color: var(--text-strong); margin: 0 0 8px; }
.home-hl p { font-family: var(--font-body); font-size: 14.5px; color: var(--text-muted); line-height: 1.55; margin: 0; }

.about { margin-top: 28px; display: flex; flex-direction: column; gap: 16px; max-width: 72ch; }
.about p { font-family: var(--font-body); font-size: 17px; line-height: 1.7; color: var(--text-body); }

.tags { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 26px; }

@media (max-width: 960px) {
  .hero { grid-template-columns: 1fr; }
  .grid-3 { grid-template-columns: 1fr; }
}
</style>
