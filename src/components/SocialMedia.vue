<template>
  <div class="social-media">
    <h4 class="social-title">Vamos conectar?</h4>
    <p class="social-desc">Entre em contato ou me siga nas redes</p>
    <div class="social-links">
      <a class="link" target="_blank" href="https://github.com/hashdefault">
        <i class="fa-brands fa-github"></i>
        <span>GitHub</span>
      </a>
      <a class="link" target="_blank" href="https://www.linkedin.com/in/lucas-g-bueno/">
        <i class="fa-brands fa-linkedin"></i>
        <span>LinkedIn</span>
      </a>
      <a class="link" href="mailto:contato@bitsbylucas.com">
        <i class="fa fa-envelope"></i>
        <span>Email</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "SocialMedia",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.social-media {
  background-color: var(--card);
  border: 1px solid var(--bg-soft);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: var(--text);
  text-align: center;
  padding: 25px;
}

.social-title {
  font-size: 20px;
  font-family: Nunito, sans-serif;
  color: var(--text);
  margin-bottom: 5px;
}

.social-desc {
  font-size: 14px;
  font-family: "Courier Prime", monospace;
  color: var(--text);
  opacity: 0.7;
  margin-bottom: 20px;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text);
  text-decoration: none;
  cursor: pointer;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: 600;
  font-family: Nunito, sans-serif;
  background-color: var(--bg);
  border: 1px solid var(--bg-soft);
  transition: all 0.3s ease;
}

.link:hover {
  border-color: var(--accent);
  color: var(--accent);
  transform: translateY(-2px);
}

.link i {
  font-size: 18px;
}

@media (max-width: 768px) {
  .social-links {
    flex-direction: column;
    gap: 10px;
  }

  .link {
    justify-content: center;
  }
}
</style>
