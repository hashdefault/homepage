<template>
  <div :class="cls">
    <span v-if="eyebrow" class="lgb-heading__eyebrow">
      <slot name="icon" />
      {{ eyebrow }}
    </span>
    <component :is="levelTag" :class="['lgb-heading__title', `lgb-heading__title--${level}`]">
      {{ title }}
    </component>
    <span v-if="rule" class="lgb-heading__rule" />
    <p v-if="description" class="lgb-heading__desc">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'DsSectionHeading',
  props: {
    eyebrow: { type: String, default: '' },
    title: { type: String, required: true },
    description: { type: String, default: '' },
    level: { type: String, default: 'h2' },
    align: { type: String, default: 'start' },
    rule: { type: Boolean, default: false }
  },
  computed: {
    levelTag() {
      if (this.level === 'h3') return 'h3';
      if (this.level === 'h4') return 'h4';
      return 'h2';
    },
    cls() {
      return ['lgb-heading', this.align === 'center' ? 'lgb-heading--center' : ''].filter(Boolean);
    }
  }
};
</script>

<style>
.lgb-heading{ display:flex; flex-direction:column; gap:10px; }
.lgb-heading__eyebrow{
  display:inline-flex; align-items:center; gap:8px;
  font-family:var(--font-mono); font-size:var(--text-2xs); font-weight:var(--weight-medium);
  letter-spacing:var(--tracking-eyebrow); text-transform:uppercase; color:var(--accent);
}
.lgb-heading__eyebrow svg{ width:14px; height:14px; }
.lgb-heading__title{
  font-family:var(--font-display); color:var(--text-strong);
  font-weight:var(--weight-bold); letter-spacing:var(--tracking-tight); line-height:var(--leading-tight);
  margin:0;
}
.lgb-heading__title--h2{ font-size:var(--text-h2); }
.lgb-heading__title--h3{ font-size:var(--text-h3); }
.lgb-heading__title--h4{ font-size:var(--text-h4); }
.lgb-heading__desc{ color:var(--text-muted); font-size:var(--text-base); max-width:60ch; margin-top:2px; }
.lgb-heading--center{ align-items:center; text-align:center; }
.lgb-heading__rule{ width:32px; height:2px; background:var(--accent); border-radius:2px; margin-top:4px; }
</style>
