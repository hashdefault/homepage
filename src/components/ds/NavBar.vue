<template>
  <nav class="lgb-nav">
    <router-link class="lgb-nav__brand" to="/">
      <span class="lgb-nav__brand-mark">{{ brandMark }}</span>
      <span class="lgb-nav__brand-name">{{ brandName }}</span>
    </router-link>
    <div class="lgb-nav__links">
      <router-link
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        :class="['lgb-nav__link', isActive(link.to) ? 'lgb-nav__link--active' : '']"
      >
        {{ link.label }}
      </router-link>
    </div>
    <div class="lgb-nav__end">
      <slot name="end" />
    </div>
  </nav>
</template>

<script>
export default {
  name: 'DsNavBar',
  props: {
    brandMark: { type: String, default: 'dev.' },
    brandName: { type: String, default: 'lucas' },
    links: { type: Array, default: () => [] }
  },
  methods: {
    isActive(to) {
      return this.$route.path === to;
    }
  }
};
</script>

<style>
.lgb-nav{
  display:flex; align-items:center; gap:24px; width:100%;
  padding:16px 28px; background:color-mix(in srgb, var(--bg-page) 82%, transparent);
  border-bottom:1px solid var(--border); backdrop-filter:saturate(140%) blur(10px);
}
.lgb-nav__brand{ display:inline-flex; align-items:baseline; gap:2px; text-decoration:none; margin-right:auto; }
.lgb-nav__brand-mark{ font-family:var(--font-mono); color:var(--accent); font-weight:var(--weight-bold); font-size:var(--text-lg); }
.lgb-nav__brand-name{ font-family:var(--font-display); color:var(--text-strong); font-weight:var(--weight-bold); font-size:var(--text-lg); letter-spacing:var(--tracking-tight); }
.lgb-nav__links{ display:flex; align-items:center; gap:4px; }
.lgb-nav__link{
  position:relative; font-family:var(--font-display); font-weight:var(--weight-medium);
  font-size:var(--text-sm); color:var(--text-muted); text-decoration:none;
  padding:8px 14px; border-radius:var(--radius-sm); transition:color var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out);
}
.lgb-nav__link:hover{ color:var(--text-strong); background:var(--surface-hover); }
.lgb-nav__link--active{ color:var(--accent); }
.lgb-nav__link--active::after{
  content:""; position:absolute; left:14px; right:14px; bottom:2px; height:2px;
  background:var(--accent); border-radius:2px;
}
.lgb-nav__end{ display:flex; align-items:center; gap:10px; }

@media (max-width: 768px) {
  .lgb-nav{ padding:12px 16px; gap:12px; }
  .lgb-nav__links{ display:none; }
}
</style>
