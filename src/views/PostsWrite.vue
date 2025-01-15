<template>
  <div class="description">
    <article class="art">
      <h3>ano 2024, 09 de janeiro</h3>
      <p>
        Para este ano planejei e tracei algumas metas e objetivos mais
        ambiciosos do que os últimos que estive buscando na minha carreira,
        pretendo trabalhar e conhecer mais pessoas e ferramentas de tecnologia
        esse ano, será muito lento e árduo, mas é como deve ser. Entre as
        principais ferramentas que quero me interar sobre I.A. está no topo da
        lista, com o mercado cada vez mais tendendo para este nicho, sendo um
        profissional de técnologia não se deve deixar de lado um assunto tão
        recorrente na atualidade. Novos repositórios e contribuições no github
        também fazem parte das metas incluídas para este ano.
      </p>
    </article>
  </div>
</template>
<script>
export default {
  name: "WritingPosts",
  mounted() {},

  data() {
    return {};
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=VT323&display=swap");

.description {
  padding: 25px;
  justify-content: flex-start;
  color: white;
  font-family: "Courier Prime";
  width: 55%;
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
  flex: 1;
  background-color: rgb(80, 80, 80);
  border-left: 2px solid rgba(0, 255, 255,0.8);
  margin:-1px;
}
.art {
  color: white;
  font-family: "Courier Prime";
  width: 100%;
  margin: 0 10%;
}

.description.visible {
  max-height: 700px;
  opacity: 1;
}

@media (max-width: 768px) {
  .description {
    width: 55%;
  }
}
</style>
