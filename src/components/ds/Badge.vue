<template>
  <span :class="cls">
    <span v-if="dot" class="lgb-badge__dot" />
    <slot />
  </span>
</template>

<script>
export default {
  name: 'DsBadge',
  props: {
    status: { type: String, default: 'neutral' },
    dot: { type: Boolean, default: true }
  },
  computed: {
    cls() {
      return ['lgb-badge', `lgb-badge--${this.status}`];
    }
  }
};
</script>

<style>
@keyframes lgb-badge-pulse{ 0%,100%{ opacity:1; transform:scale(1);} 50%{ opacity:0.35; transform:scale(0.8);} }
.lgb-badge{
  display:inline-flex; align-items:center; gap:8px;
  font-family:var(--font-mono); font-size:var(--text-xs); font-weight:var(--weight-medium);
  line-height:1; padding:7px 13px; border-radius:var(--radius-pill);
  border:1px solid var(--border); background:var(--surface-card); color:var(--text-body);
}
.lgb-badge__dot{ width:7px; height:7px; border-radius:50%; flex:none; background:var(--text-faint); }
.lgb-badge--available .lgb-badge__dot{ background:var(--positive); animation:lgb-badge-pulse 2s var(--ease-in-out) infinite; }
.lgb-badge--available{ color:var(--text-strong); }
.lgb-badge--signal .lgb-badge__dot{ background:var(--accent); }
.lgb-badge--warning .lgb-badge__dot{ background:var(--warning); }
.lgb-badge--neutral .lgb-badge__dot{ background:var(--text-faint); }
</style>
