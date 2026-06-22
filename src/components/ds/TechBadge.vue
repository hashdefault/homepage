<template>
  <div :class="cls">
    <img class="lgb-tech__icon" :src="src" :alt="name" />
    <span class="lgb-tech__name">{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: 'DsTechBadge',
  props: {
    src: { type: String, required: true },
    name: { type: String, required: true },
    layout: { type: String, default: 'tile' }
  },
  computed: {
    cls() {
      return [
        'lgb-tech',
        this.layout === 'row' ? 'lgb-tech--row' : '',
        this.layout === 'bare' ? 'lgb-tech--bare' : ''
      ].filter(Boolean);
    }
  }
};
</script>

<style>
.lgb-tech{
  display:inline-flex; flex-direction:column; align-items:center; gap:10px;
  padding:16px 14px; min-width:92px; border-radius:var(--radius-lg);
  background:var(--surface-card); border:1px solid var(--border);
  transition:border-color var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out),
             background var(--dur-base) var(--ease-out);
}
.lgb-tech:hover{ border-color:var(--accent); transform:translateY(-3px); background:var(--surface-raised); }
.lgb-tech__icon{
  width:42px; height:42px; object-fit:contain; display:block;
  border-radius:10px; background:#fff; padding:6px;
}
.lgb-tech__name{
  font-family:var(--font-mono); font-size:var(--text-xs); color:var(--text-body);
  letter-spacing:0.01em; text-align:center;
}
.lgb-tech--row{ flex-direction:row; gap:12px; min-width:0; padding:10px 16px; }
.lgb-tech--row .lgb-tech__icon{ width:30px; height:30px; padding:4px; }
.lgb-tech--bare{ background:transparent; border:none; padding:8px; }
.lgb-tech--bare:hover{ background:transparent; transform:translateY(-3px); }
</style>
