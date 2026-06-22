<template>
  <component
    :is="tag"
    :class="cls"
    v-bind="extra"
  >
    <slot name="iconLeft" />
    <span v-if="$slots.default"><slot /></span>
    <slot name="iconRight" />
  </component>
</template>

<script>
export default {
  name: 'DsButton',
  props: {
    variant: { type: String, default: 'primary' },
    size: { type: String, default: 'md' },
    fullWidth: { type: Boolean, default: false },
    href: { type: String, default: null },
    disabled: { type: Boolean, default: false },
    as: { type: String, default: null }
  },
  computed: {
    tag() { return this.as || (this.href ? 'a' : 'button'); },
    cls() {
      return [
        'lgb-btn',
        `lgb-btn--${this.variant}`,
        `lgb-btn--${this.size}`,
        this.fullWidth ? 'lgb-btn--block' : ''
      ].filter(Boolean);
    },
    extra() {
      if (this.tag === 'a') {
        const o = { href: this.href };
        if (this.disabled) o['aria-disabled'] = 'true';
        return o;
      }
      return { disabled: this.disabled };
    }
  }
};
</script>

<style>
.lgb-btn{
  display:inline-flex; align-items:center; justify-content:center; gap:8px;
  font-family:var(--font-display); font-weight:var(--weight-semibold);
  letter-spacing:0.01em; line-height:1; white-space:nowrap;
  border-radius:var(--radius-md); border:1px solid transparent; cursor:pointer;
  transition:background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out),
             color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out),
             box-shadow var(--dur-fast) var(--ease-out);
  text-decoration:none; -webkit-tap-highlight-color:transparent;
}
.lgb-btn:focus-visible{ outline:none; box-shadow:var(--ring-focus); }
.lgb-btn:active{ transform:translateY(1px); }
.lgb-btn[disabled], .lgb-btn[aria-disabled="true"]{ opacity:0.45; pointer-events:none; }
.lgb-btn svg{ width:1.1em; height:1.1em; }

.lgb-btn--sm{ font-size:var(--text-sm); padding:8px 14px; }
.lgb-btn--md{ font-size:var(--text-base); padding:11px 20px; }
.lgb-btn--lg{ font-size:var(--text-lg); padding:14px 26px; }

.lgb-btn--primary{ background:var(--accent); color:var(--on-accent); border-color:var(--accent); }
.lgb-btn--primary:hover{ background:var(--accent-hover); border-color:var(--accent-hover); box-shadow:var(--glow-signal); }
.lgb-btn--primary:active{ background:var(--accent-press); }

.lgb-btn--secondary{ background:transparent; color:var(--text-strong); border-color:var(--border-strong); }
.lgb-btn--secondary:hover{ border-color:var(--accent); color:var(--accent); background:var(--accent-tint); }

.lgb-btn--ghost{ background:transparent; color:var(--text-muted); border-color:transparent; }
.lgb-btn--ghost:hover{ color:var(--text-strong); background:var(--surface-hover); }

.lgb-btn--block{ display:flex; width:100%; }
</style>
