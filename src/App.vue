<template>
  <div class="site">
    <div class="site-nav">
      <NavBar
        brand-mark="dev."
        brand-name="lucas"
        :links="navLinks"
      >
        <template #end>
          <ThemeToggle />
          <DsButton size="sm" href="/contato" @click.prevent="$router.push('/contato')">
            <template #iconRight><Icon name="arrow-up-right" /></template>
            Contato
          </DsButton>
        </template>
      </NavBar>
    </div>

    <main class="page">
      <router-view />
    </main>

    <footer class="site-footer">
      <div class="site-footer__inner">
        <div>
          <div class="brand"><span class="m">dev.</span>lucas</div>
          <div class="tagline">Construindo soluções web sólidas</div>
        </div>
        <div class="copy">&copy; {{ year }} Lucas G. Bueno<br>Maringá, PR &middot; Brasil</div>
      </div>
    </footer>
  </div>
</template>

<script>
import NavBar from './components/ds/NavBar.vue';
import DsButton from './components/ds/Button.vue';
import ThemeToggle from './components/ThemeToggle.vue';
import Icon from './components/ds/Icon.vue';

export default {
  name: 'App',
  components: { NavBar, DsButton, ThemeToggle, Icon },
  data() {
    return {
      navLinks: [
        { label: 'Início', to: '/' },
        { label: 'Works', to: '/portfolio' },
        { label: 'Tech Stack', to: '/techstack' },
        { label: 'Posts', to: '/posts' },
      ]
    };
  },
  computed: {
    year() { return new Date().getFullYear(); }
  },
  created() {
    document.title = 'dev.lucas';
  }
};
</script>

<style>
html { scroll-behavior: smooth; }

.site-nav { position: sticky; top: 0; z-index: 50; }
.page { max-width: var(--container-max); margin: 0 auto; padding: 0 32px 96px; }
.screen { display: flex; flex-direction: column; }
.sec { margin-top: 80px; }
.sec--top { margin-top: 56px; }

.site-footer { border-top: 1px solid var(--border); margin-top: 96px; }
.site-footer__inner {
  max-width: var(--container-max); margin: 0 auto; padding: 32px;
  display: flex; justify-content: space-between; align-items: center; gap: 20px; flex-wrap: wrap;
}
.site-footer .brand { font-family: var(--font-display); font-weight: 700; color: var(--text-strong); }
.site-footer .brand .m { font-family: var(--font-mono); color: var(--accent); }
.site-footer .tagline { font-family: var(--font-mono); font-size: 12px; color: var(--text-faint); margin-top: 4px; }
.site-footer .copy { font-family: var(--font-mono); font-size: 12px; color: var(--text-faint); text-align: right; }

@media (max-width: 768px) {
  .page { padding: 0 16px 64px; }
  .site-footer__inner { flex-direction: column; text-align: center; }
  .site-footer .copy { text-align: center; }
}
</style>
