<template>
  <span :class="cls">
    <slot name="icon" />
    <slot />
  </span>
</template>

<script>
export default {
  name: 'DsTag',
  props: {
    variant: { type: String, default: 'default' },
    pill: { type: Boolean, default: false }
  },
  computed: {
    cls() {
      return [
        'lgb-tag',
        this.variant !== 'default' ? `lgb-tag--${this.variant}` : '',
        this.pill ? 'lgb-tag--pill' : ''
      ].filter(Boolean);
    }
  }
};
</script>

<style>
.lgb-tag{
  display:inline-flex; align-items:center; gap:6px;
  font-family:var(--font-mono); font-size:var(--text-xs); font-weight:var(--weight-medium);
  line-height:1; padding:6px 11px; border-radius:var(--radius-sm);
  border:1px solid var(--border); background:var(--surface-raised); color:var(--text-muted);
  white-space:nowrap;
}
.lgb-tag svg{ width:13px; height:13px; }
.lgb-tag--signal{ color:var(--accent); border-color:color-mix(in srgb, var(--accent) 40%, transparent); background:var(--accent-tint); }
.lgb-tag--amber{ color:var(--amber); border-color:color-mix(in srgb, var(--amber) 40%, transparent); background:var(--accent-2-tint); }
.lgb-tag--solid{ color:var(--text-strong); border-color:var(--border-strong); background:var(--surface-hover); }
.lgb-tag--pill{ border-radius:var(--radius-pill); }
</style>
