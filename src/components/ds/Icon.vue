<template>
  <i :data-lucide="name" ref="el"></i>
</template>

<script>
export default {
  name: 'DsIcon',
  props: {
    name: { type: String, required: true }
  },
  mounted() { this.render(); },
  updated() { this.render(); },
  methods: {
    render() {
      if (window.lucide) {
        window.lucide.createIcons({ nameAttr: 'data-lucide', nodes: [this.$refs.el] });
      }
    }
  }
};
</script>
