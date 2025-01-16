<template>
  <div class="description" id='ref_id'>
    <article class="art">
      <h3>ano 2024, 16 de janeiro</h3>
      <p>
      Computação em nuvem tem sido minha prioridade para as tecnologias que quero aprender esse ano. 
      Comecei pela AWS, já aprendi vários conceitos e dinâmicas novas de deploy e configurações de servidor. Mesmo estando por dentro de
      várias das ideias dessa área pude notar que ainda tenho muito o que explorar. Alguns dos serviços que ja tive contato foram EC2, para criação
      e configuração de VPS, Route 53 para criação de hosted zones, Cloudfront para distribuição, Amazon S3 buckets para armazenamento de dados, AWS Certificate
      Manager para emissão de certificados SSL.
      Fiz o deploy do meu site pessoal usando essas tecnologias e decidi fazer utilizando cada serviço e configurando eu mesmo pra não pular etapas
      e entender realmente como um projeto funciona, desde a fundação mais básica até o momento em que digitamos a url no browser.
      </p>
    </article>
 
    <article class="art">
      <h3>ano 2024, 09 de janeiro</h3>
      <p>
        Para este ano planejei e tracei algumas metas e objetivos mais
        ambiciosos do que os últimos que estive buscando na minha carreira,
        pretendo trabalhar e conhecer mais pessoas e ferramentas de tecnologia esse ano, será muito lento e árduo, mas é como deve ser. Entre as
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
  background-color: rgb(22, 22, 22);
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
    width: 80%;
  }
}
</style>
