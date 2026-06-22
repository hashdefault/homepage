<template>
  <span :class="cls" :style="{ width: px + 'px', height: px + 'px' }">
    <img class="lgb-avatar__img" :src="src" :alt="alt" />
    <span v-if="status" class="lgb-avatar__status" />
  </span>
</template>

<script>
const SIZES = { sm: 40, md: 64, lg: 96, xl: 128 };

export default {
  name: 'DsAvatar',
  props: {
    src: { type: String, required: true },
    alt: { type: String, default: '' },
    size: { type: [String, Number], default: 'md' },
    ring: { type: Boolean, default: false },
    square: { type: Boolean, default: false },
    status: { type: Boolean, default: false }
  },
  computed: {
    px() { return typeof this.size === 'number' ? this.size : (SIZES[this.size] || SIZES.md); },
    cls() {
      return [
        'lgb-avatar',
        this.ring ? 'lgb-avatar--ring' : '',
        this.square ? 'lgb-avatar--square' : ''
      ].filter(Boolean);
    }
  }
};
</script>

<style>
.lgb-avatar{ position:relative; display:inline-block; flex:none; }
.lgb-avatar__img{
  display:block; width:100%; height:100%; object-fit:cover; border-radius:50%;
  background:var(--surface-raised);
}
.lgb-avatar--ring .lgb-avatar__img{ box-shadow:0 0 0 2px var(--bg-page), 0 0 0 4px var(--accent); }
.lgb-avatar--square .lgb-avatar__img{ border-radius:var(--radius-lg); }
.lgb-avatar__status{
  position:absolute; right:4%; bottom:4%; width:28%; height:28%; min-width:10px; min-height:10px;
  border-radius:50%; background:var(--positive); border:2.5px solid var(--bg-page);
}
.lgb-avatar--square .lgb-avatar__status{ right:-4%; bottom:-4%; }
</style>
