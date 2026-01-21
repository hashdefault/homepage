<template>
  <div class="footer-description">
    <div class="footer-content">
      <div class="footer-brand">
        <span class="brand-name"><i class="fa fa-code"></i> dev. lucas</span>
        <span class="brand-tagline">Construindo soluções web</span>
      </div>
      <div class="footer-info">
        <p class="copyright">© {{ currentYear }} Lucas G. Bueno. Todos os direitos reservados.</p>
        <p class="built-with">Feito com <i class="fa fa-heart"></i> usando Vue.js</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterDescription",
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>


<style scoped>
.footer-description {
  width: 50%;
  padding: 25px;
  color: var(--text);
  display: flex;
  flex-direction: column;
  align-self: center;
  background-color: var(--bg);
  z-index: 1;
  border-top: 1px solid var(--bg-soft);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.brand-name {
  font-size: 18px;
  font-family: Nunito, sans-serif;
  font-weight: 700;
  color: var(--text);
}

.brand-name i {
  color: var(--accent);
  margin-right: 5px;
}

.brand-tagline {
  font-size: 12px;
  font-family: "Courier Prime", monospace;
  color: var(--text);
  opacity: 0.6;
}

.footer-info {
  text-align: right;
}

.copyright {
  font-size: 13px;
  font-family: "Courier Prime", monospace;
  color: var(--text);
  opacity: 0.8;
  margin: 0 0 5px 0;
}

.built-with {
  font-size: 12px;
  font-family: "Courier Prime", monospace;
  color: var(--text);
  opacity: 0.6;
  margin: 0;
}

.built-with i {
  color: #ff6b6b;
}

@media (max-width: 1024px) {
  .footer-description {
    width: 85%;
  }

  .footer-content {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }

  .footer-brand {
    align-items: center;
  }

  .footer-info {
    text-align: center;
  }
}
</style>
