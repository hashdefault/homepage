<template>
  <div class="description">
    <div class="btns-links lights">
      <a ref="link-p-code" class="btn btn-link p-code"> </a>
      <a ref="link-p-heart" class="btn btn-link p-heart"></a>
    </div>
    <h3 class="subtitle">Intro</h3>
    <p id="p-code">
      <i class="fa fa-code"></i>
      {{ displayedTextFirst }}
    </p>
    <h3 class="subtitle">Refs</h3>
    <p id="p-heart">
      <i class="fa fa-heart"></i> Linux universe
      <br>
      <i class="fa fa-book"></i> Mítico Homem-Mês,  Frederick P. Brooks Jr. <br />
      <i class="fa fa-book"></i> Os Inovadores, Walter Isaacson<br />
    </p>
  </div>
</template>
<script>
export default {
  name: "HomeDescription",
  mounted() {
    this.startTypingFirst();
  },
  data() {
    return {
      fullTextFirst:
        //"Minha jornada no mundo da programação começou na universidade, enquanto eu estava até o pescoço nas aulas de Física. Foi como tropeçar em um universo totalmente novo. Avançando para 2020, me vi mergulhando de cabeça no cenário tecnológico, trabalhando como desenvolvedor full-stack em uma empresa privada. Ser um desenvolvedor full-stack significa ter muitas funções, mas neste universo as vezes precisamos abraçar o caos e perseguir esses sonhos, uma linha de código de cada vez! 🚀 ",
        `Lucas é um desenvolvedor web que atualmente reside na cidade de Maringá, no estado do Paraná. 
        Sua trajetória na tecnologia começou em 2019, enquanto cursava Física, quando decidiu estudar Python para análises de dados, unindo seu interesse em resolver problemas práticos à aplicação de ferramentas computacionais.
No ano seguinte, em 2020, ampliou seus horizontes ao iniciar estudos em desenvolvimento web,
explorando tecnologias e linguagens como PHP.
      Esse novo foco o levou a ingressar em uma empresa, onde desde então atua na manutenção e desenvolvimento de websites e sistemas. Contribuindo para projetos que impactam positivamente clientes e usuários finais. Sua experiência e paixão pela programação são uma peça fundamental na carreira.`,
      fullTextSecond: "",
      //"Sou apaixonado por músicas como folk, clássica, rock e soul. As músicas instrumentais me ajudam a relaxar, enquanto as composições clássicas me oferecem uma elegância atemporal. A energia visceral do rock alimenta minha paixão, e os vocais do Soul falam à minha alma. Me sinto enriquecido por cada um desses gêneros. Livros, cinema e arte são parte de interesses dos quais eu vejo sendo fundamentais a experiência humana.",
      displayedTextFirst: "",
      typingSpeed: 50,
      isLightsUp: true,
      isShow: true,
    };
  },

  methods: {
    startTypingFirst() {
      this.displayedTextFirst = "";
      let index = 0;
      const interval = setInterval(() => {
        if (index < this.fullTextFirst.length) {
          this.displayedTextFirst += this.fullTextFirst[index];
          index++;
        } else {
          clearInterval(interval); // Stop typing when the full text is displayed
        }
      }, this.typingSpeed);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=VT323&display=swap");

.description {
  width: 50%;
  padding: 20px;
}
.description ul {
  border: 1px solid grey;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  background-color: rgb(45, 45, 45);
}
.description ul li {
  list-style-type: none;
  text-align: left;
}
.description p {
  font-family: Courier Prime, monospace;
  color: white;
  overflow: hidden;
}
.description a.btn {
  margin-left: 25px;
  cursor: pointer;
  border-radius: 50%;
  border: none;
}
.description a.btn i {
  border-radius: 50%;
  border: none;
}
.subtitle {
  color: rgb(240, 240, 240);
  text-decoration-line: underline;
  text-decoration-thickness: 3px;
  text-decoration-color: rgb(0, 255, 255);
  width: 100px;
}

p::after {
  content: "|";
  font-weight: bold;
  display: inline-block;
  animation: blink 0.6s steps(2, start) infinite;
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  50.1%,
  100% {
    opacity: 0;
  }
}
@media (max-width: 768px) {
  .description {
    width: 90%;
    padding: 0;
  }
}
</style>
