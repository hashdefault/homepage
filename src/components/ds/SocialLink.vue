<template>
  <a :class="cls" :href="href" target="_blank" rel="noreferrer" :aria-label="label">
    <slot name="icon" />
    <span v-if="!iconOnly && label">{{ label }}</span>
    <span v-if="!iconOnly && handle" class="lgb-social__handle">{{ handle }}</span>
  </a>
</template>

<script>
export default {
  name: 'DsSocialLink',
  props: {
    label: { type: String, default: '' },
    handle: { type: String, default: '' },
    href: { type: String, default: '#' },
    iconOnly: { type: Boolean, default: false }
  },
  computed: {
    cls() {
      return ['lgb-social', this.iconOnly ? 'lgb-social--icon' : ''].filter(Boolean);
    }
  }
};
</script>

<style>
.lgb-social{
  display:inline-flex; align-items:center; gap:10px;
  padding:11px 18px; border-radius:var(--radius-md);
  background:var(--surface-raised); border:1px solid var(--border);
  color:var(--text-body); font-family:var(--font-display); font-weight:var(--weight-medium);
  font-size:var(--text-sm); text-decoration:none; cursor:pointer;
  transition:border-color var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out),
             transform var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out);
}
.lgb-social:hover{ border-color:var(--accent); color:var(--accent); transform:translateY(-2px); }
.lgb-social:focus-visible{ outline:none; box-shadow:var(--ring-focus); }
.lgb-social svg{ width:18px; height:18px; }
.lgb-social__handle{ color:var(--text-faint); font-family:var(--font-mono); font-size:var(--text-xs); }
.lgb-social:hover .lgb-social__handle{ color:var(--accent); }
.lgb-social--icon{ padding:11px; }
</style>
