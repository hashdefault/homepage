<template>
  <component :is="tag" :class="cls" v-bind="linkAttrs">
    <span v-if="media" class="lgb-card__media">
      <img :src="media" :alt="mediaAlt" />
    </span>
    <div class="lgb-card__body">
      <slot />
    </div>
  </component>
</template>

<script>
export default {
  name: 'DsCard',
  props: {
    media: { type: String, default: null },
    mediaAlt: { type: String, default: '' },
    hover: { type: Boolean, default: false },
    accent: { type: Boolean, default: false },
    padding: { type: String, default: 'md' },
    href: { type: String, default: null },
    as: { type: String, default: null }
  },
  computed: {
    tag() { return this.as || (this.href ? 'a' : 'div'); },
    cls() {
      return [
        'lgb-card',
        (this.hover || this.href) ? 'lgb-card--hover' : '',
        this.accent ? 'lgb-card--accent' : '',
        this.padding === 'sm' ? 'lgb-card--pad-sm' : '',
        this.padding === 'lg' ? 'lgb-card--pad-lg' : ''
      ].filter(Boolean);
    },
    linkAttrs() {
      if (this.href) return { href: this.href, target: '_blank', rel: 'noreferrer' };
      return {};
    }
  }
};
</script>

<style>
.lgb-card{
  display:block; position:relative; background:var(--surface-card);
  border:1px solid var(--border); border-radius:var(--radius-lg);
  box-shadow:var(--shadow-inset-hi); overflow:hidden; text-decoration:none; color:inherit;
  transition:border-color var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out),
             box-shadow var(--dur-base) var(--ease-out);
}
.lgb-card--hover:hover{ border-color:var(--accent); transform:translateY(-4px); box-shadow:var(--shadow-lg); }
.lgb-card--hover:hover .lgb-card__media img{ transform:scale(1.04); }
.lgb-card__media{ display:block; width:100%; aspect-ratio:16/9; overflow:hidden; border-bottom:1px solid var(--border); background:var(--ink-900); }
.lgb-card__media img{ width:100%; height:100%; object-fit:cover; display:block; transition:transform var(--dur-slow) var(--ease-out); }
.lgb-card__body{ padding:var(--space-6); }
.lgb-card--pad-sm .lgb-card__body{ padding:var(--space-4); }
.lgb-card--pad-lg .lgb-card__body{ padding:var(--space-8); }
.lgb-card--accent{ border-top:2px solid var(--accent); }
</style>
