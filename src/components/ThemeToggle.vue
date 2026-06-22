<template>
  <button class="lgb-theme-toggle" @click="toggle" :aria-label="theme === 'dark' ? 'Modo claro' : 'Modo escuro'">
    <Icon :name="theme === 'dark' ? 'sun' : 'moon'" />
  </button>
</template>

<script>
import Icon from './ds/Icon.vue';

export default {
  name: 'ThemeToggle',
  components: { Icon },
  data() {
    return { theme: 'dark' };
  },
  mounted() {
    const saved = localStorage.getItem('theme') || 'dark';
    this.apply(saved);
  },
  methods: {
    toggle() {
      this.apply(this.theme === 'dark' ? 'light' : 'dark');
    },
    apply(mode) {
      this.theme = mode;
      document.documentElement.setAttribute('data-theme', mode);
      localStorage.setItem('theme', mode);
    }
  }
};
</script>

<style>
.lgb-theme-toggle {
  display: inline-flex; align-items: center; justify-content: center;
  padding: 8px; border: 1px solid var(--border); border-radius: var(--radius-md);
  background: transparent; color: var(--text-muted); cursor: pointer;
  transition: border-color var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out);
}
.lgb-theme-toggle:hover { border-color: var(--accent); color: var(--accent); }
.lgb-theme-toggle:focus-visible { outline: none; box-shadow: var(--ring-focus); }
.lgb-theme-toggle svg { width: 18px; height: 18px; }
</style>
