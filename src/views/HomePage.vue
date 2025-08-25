<template>
  <div class="description">
    <div class="banner_desc">
      <p>i use arch, btw</p>
    </div>
    <HeaderDescription />
    <div class="btns-links lights">
      <a ref="link-p-code" class="btn btn-link p-code"> </a>
      <a ref="link-p-heart" class="btn btn-link p-heart"></a>
    </div>
    <h3 class="subtitle">Intro</h3>
    <p id="p-code">
      <i class="fa fa-code"></i>
      {{ displayedTextFirst }}
    </p>
    <h3 class="subtitle">Conteúdo & Refs</h3>
    <p id="p-heart">
      <i class="fa fa-heart"></i> Linux universe<br />
      <i class="fa fa-book-open"></i> Open Source<br />

      <i class="fa fa-book"></i>
      <a class='ref_link' href="https://learnxinyminutes.com/" target='_blank'>
        Learn X in Y Minutes
      </a>

      <br>
      <i class="fa-brands fa-github"></i>
      <a class="ref_link" href="https://github.com/kamranahmedse/developer-roadmap" target="_blank">
        Developer Roadmap
      </a>
    </p>
  </div>
</template>
<script>
import HeaderDescription from "./../components/HeaderDescription.vue";
export default {
  name: "HomeDescription",
  mounted() {
    this.startTypingFirst();
  },
  components: {
    HeaderDescription

  },
  data() {
    return {
      fullTextFirst:
        //"Minha jornada no mundo da programação começou na universidade, enquanto eu estava até o pescoço nas aulas de Física. Foi como tropeçar em um universo totalmente novo. Avançando para 2020, me vi mergulhando de cabeça no cenário tecnológico, trabalhando como desenvolvedor full-stack em uma empresa privada. Ser um desenvolvedor full-stack significa ter muitas funções, mas neste universo as vezes precisamos abraçar o caos e perseguir esses sonhos, uma linha de código de cada vez! 🚀 ",
        `Lucas é um desenvolvedor de software que atualmente reside na cidade de Maringá, no estado do Paraná. 
        Sua trajetória na tecnologia começou em 2019, enquanto estudava Python para análises de dados, unindo seu interesse em resolver problemas práticos à aplicação de ferramentas para solução de problemas matemáticos.
No ano seguinte, em 2020, ampliou seus horizontes ao iniciar estudos em desenvolvimento web,
explorando tecnologias e linguagens como PHP, Javascript e frameworks com Django .
      Esse novo foco o levou a ingressar em uma empresa, onde desde então atua na manutenção e desenvolvimento de websites e sistemas. Sua experiência e paixão pelo mundo linux são uma peça fundamental na carreira.`,
      fullTextSecond: "",
      //"Sou apaixonado por músicas como folk, clássica, rock e soul. As músicas instrumentais me ajudam a relaxar, enquanto as composições clássicas me oferecem uma elegância atemporal. A energia visceral do rock alimenta minha paixão, e os vocais do Soul falam à minha alma. Me sinto enriquecido por cada um desses gêneros. Livros, cinema e arte são parte de interesses dos quais eu vejo sendo fundamentais a experiência humana.",
      displayedTextFirst: "",
      typingSpeed: 50,
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

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=VT323&display=swap");

.description {
  width: 40%;
  padding: 25px;
  background-color: rgb(22, 22, 22);
  margin: -1px;
  display: flex;
  align-items: start;
  flex-direction: column;
}

.description ul li {
  list-style-type: none;
  text-align: left;
}

.description p {
  font-family: Courier Prime, monospace;
  color: white;
  overflow: hidden;
  line-height: 1.4;
  margin-left: 10px;
  font-size: 16px;
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
  text-underline-offset: 6px;
  text-decoration-color: rgb(0, 255, 255);
}

p#p-code::after {
  content: "|";
  font-weight: bold;
  display: inline-block;
  animation: blink 0.6s steps(2, start) infinite;
}

.ref_link {
  color: white;
  cursor: pointer;
  text-decoration: none;
}

.ref_link:hover {
  text-decoration: underline;
}

.banner_desc {
  text-align: center;
  backdrop-filter: blur(8px);
  width: 100%;
  background-color: rgb(22, 22, 22);
}

.banner_desc p {
  text-align: center;
  padding: 10px 20px;
  width: 95%;
  background-color: rgba(50, 50, 50, 0.6);
  border-radius: 10px;
  border: 1px solid rgba(50, 50, 50, 0.6);
  color: rgb(240, 240, 240);
  font-size: 18px;
  font-family: Nunito, monospace;
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


@media (max-width: 1024px) {
  .description {
    width: 80%;
  }

  .banner_desc {
    width: 90%;
    background-color: rgb(22, 22, 22);
  }

  .banner_desc p {
    width: 100%;
  }
}
</style>
