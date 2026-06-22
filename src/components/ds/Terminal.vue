<template>
  <div class="lgb-term">
    <div class="lgb-term__bar">
      <span class="lgb-term__dots">
        <span class="lgb-term__dot" />
        <span class="lgb-term__dot" />
        <span class="lgb-term__dot" />
      </span>
      <span class="lgb-term__title">{{ title }}</span>
    </div>
    <div class="lgb-term__body">
      <template v-if="lines">
        <div
          v-for="(ln, i) in lines"
          :key="i"
          :class="lineClass(ln)"
        >
          <template v-if="(ln.type || 'cmd') === 'cmd'">
            <span class="lgb-term__sigil">$</span>
            <span class="lgb-term__cmd">
              {{ ln.text }}
              <span v-if="caret && i === lines.length - 1" class="lgb-term__caret" />
            </span>
          </template>
          <template v-else>
            <span style="flex:1">{{ ln.text }}</span>
          </template>
        </div>
      </template>
      <slot v-else />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DsTerminal',
  props: {
    title: { type: String, default: 'lucas@arch:~' },
    lines: { type: Array, default: null },
    caret: { type: Boolean, default: false }
  },
  methods: {
    lineClass(ln) {
      const type = ln.type || 'cmd';
      if (type === 'cmd') return 'lgb-term__line';
      return `lgb-term__line lgb-term__${type}`;
    }
  }
};
</script>

<style>
.lgb-term{
  border:1px solid var(--border); border-radius:var(--radius-lg); overflow:hidden;
  background:var(--ink-900); box-shadow:var(--shadow-md); font-family:var(--font-mono);
}
.lgb-term__bar{
  display:flex; align-items:center; gap:8px; padding:11px 14px;
  background:var(--ink-850); border-bottom:1px solid var(--border);
}
.lgb-term__dots{ display:flex; gap:7px; }
.lgb-term__dot{ width:11px; height:11px; border-radius:50%; background:var(--ink-600); }
.lgb-term__dot:nth-child(1){ background:#E5614C; }
.lgb-term__dot:nth-child(2){ background:var(--amber); }
.lgb-term__dot:nth-child(3){ background:var(--positive); }
.lgb-term__title{ margin-left:8px; font-size:var(--text-2xs); letter-spacing:0.08em; text-transform:lowercase; color:var(--text-faint); }
.lgb-term__body{ padding:18px 18px 20px; font-size:var(--text-sm); line-height:1.75; color:var(--text); }
.lgb-term__line{ display:flex; gap:10px; white-space:pre-wrap; word-break:break-word; }
.lgb-term__line + .lgb-term__line{ margin-top:2px; }
.lgb-term__sigil{ color:var(--accent); user-select:none; flex:none; }
.lgb-term__cmd{ color:var(--text-strong); }
.lgb-term__out{ color:var(--text-muted); padding-left:22px; }
.lgb-term__comment{ color:var(--text-faint); }
.lgb-term__comment::before{ content:"# "; }
.lgb-term__caret{ display:inline-block; width:9px; height:1.05em; vertical-align:-2px; background:var(--accent); margin-left:4px; animation:lgb-term-blink 1.1s steps(2,start) infinite; }
@keyframes lgb-term-blink{ 0%,50%{opacity:1;} 50.1%,100%{opacity:0;} }
</style>
