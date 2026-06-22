<template>
  <div class="screen">
    <section class="sec sec--top contact">
      <div class="contact__copy">
        <SectionHeading eyebrow="Contato" title="Vamos construir algo juntos?" description="Estou aberto a novos projetos, parcerias e conversas sobre tecnologia. Escolha o canal que preferir." :rule="true">
          <template #icon><Icon name="send" /></template>
        </SectionHeading>
        <div class="contact__links">
          <SocialLink label="GitHub" handle="@hashdefault" href="https://github.com/hashdefault">
            <template #icon><Icon name="github" /></template>
          </SocialLink>
          <SocialLink label="LinkedIn" handle="/in/lucas-g-bueno" href="https://www.linkedin.com/in/lucas-g-bueno/">
            <template #icon><Icon name="linkedin" /></template>
          </SocialLink>
          <SocialLink label="Email" handle="contato@bitsbylucas.com" href="mailto:contato@bitsbylucas.com">
            <template #icon><Icon name="mail" /></template>
          </SocialLink>
        </div>
        <div class="contact__cta">
          <DsButton variant="primary" size="lg" href="mailto:contato@bitsbylucas.com">
            <template #iconLeft><Icon name="mail" /></template>
            contato@bitsbylucas.com
          </DsButton>
        </div>
      </div>
      <div class="contact__aside">
        <Terminal title="lucas@arch:~" :caret="true" :lines="termLines" />
      </div>
    </section>
  </div>
</template>

<script>
import SectionHeading from '../components/ds/SectionHeading.vue';
import SocialLink from '../components/ds/SocialLink.vue';
import DsButton from '../components/ds/Button.vue';
import Terminal from '../components/ds/Terminal.vue';
import Icon from '../components/ds/Icon.vue';

export default {
  name: 'ContactPage',
  components: { SectionHeading, SocialLink, DsButton, Terminal, Icon },
  data() {
    return {
      termLines: [
        { type: 'cmd', text: 'mail --compose' },
        { type: 'comment', text: 'tempo de resposta: ~24h' },
        { type: 'out', text: 'De: você' },
        { type: 'out', text: 'Para: Lucas G. Bueno' },
        { type: 'out', text: 'Assunto: novo projeto' },
        { type: 'cmd', text: 'send' },
      ]
    };
  }
};
</script>

<style>
.contact { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 48px; align-items: center; }
.contact__links { display: flex; flex-direction: column; gap: 12px; margin-top: 32px; max-width: 380px; }
.contact__links > a { justify-content: flex-start; }
.contact__cta { margin-top: 24px; }

@media (max-width: 960px) {
  .contact { grid-template-columns: 1fr; }
}
</style>
