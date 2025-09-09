<template>
  <button class="theme-toggle" @click="toggle">
    <i v-if="theme==='dark'" class="fa fa-sun"></i>
    <i v-else class="fa fa-moon"></i>
    <span>{{ theme === 'dark' ? 'Light' : 'Dark' }}</span>
  </button>
</template>

<script>
export default {
  name: 'ThemeToggle',
  data() {
    return {
      theme: 'dark'
    };
  },
  mounted() {
    const saved = localStorage.getItem('theme') || 'dark';
    this.apply(saved);
  },
  methods: {
    toggle() {
      const next = this.theme === 'dark' ? 'light' : 'dark';
      this.apply(next);
    },
    apply(mode) {
      this.theme = mode;
      document.documentElement.setAttribute('data-theme', mode);
      localStorage.setItem('theme', mode);
    }
  }
};
</script>

<style scoped>
.theme-toggle {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border: 1px solid var(--accent);
  border-radius: 6px;
  background: transparent;
  color: var(--text);
  cursor: pointer;
  font-weight: 700;
}
.theme-toggle:hover {
  background: var(--bg-soft);
}
.theme-toggle i { color: var(--accent); }

@media (max-width: 1024px) {
  .theme-toggle {
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 1002;
    padding: 10px 12px;
    border: 1px solid var(--bg-soft);
    border-radius: 8px;
    background: var(--bg);
    box-shadow: 0 2px 8px rgba(0,0,0,.15);
    gap: 6px;
  }
  .theme-toggle span {
    display: none;
  }
}
</style>
