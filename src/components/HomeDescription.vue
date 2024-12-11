<template>
  <div class="description">
    <ul>
      <div class="btns-links lights">
        <a
          ref="link-p-code"
          @click="toggleClasses()"
          class="btn btn-link p-code"
          ><i
            class="fa fa-circle menu-icon"
            :class="{ lightsUp: !isLightsUp, lightsDown: isLightsUp }"
          ></i>
        </a>
        <a
          ref="link-p-heart"
          @click="toggleClasses()"
          class="btn btn-link p-heart"
          ><i
            class="fa fa-circle menu-icon"
            :class="{ lightsUp: isLightsUp, lightsDown: !isLightsUp }"
          ></i
        ></a>
      </div>
      <li :class="{ show: !isShow, hide: isShow }">
        <p id="p-code" :class="{ show: !isShow, hide: isShow }">
          <i class="fa fa-code"></i>
          {{ displayedTextFirst }}
        </p>
      </li>
      <li :class="{ show: isShow, hide: !isShow }">
        <p id="p-heart" :class="{ show: isShow, hide: !isShow }">
          <i class="fa fa-heart"></i>
          {{ displayedTextSecond }}
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeDescription",
  mounted() {
    this.startTypingFirst();
    setInterval(this.toggleClasses(), 1000);
  },
  data() {
    return {
      fullTextFirst:
        "Minha jornada no mundo da programação começou na universidade, enquanto eu estava até o pescoço nas aulas de Física. Foi como tropeçar em um universo totalmente novo. Avançando para 2020, me vi mergulhando de cabeça no cenário tecnológico, trabalhando como desenvolvedor full-stack em uma empresa privada. Ser um desenvolvedor full-stack significa ter muitas funções, mas neste universo as vezes precisamos abraçar o caos e perseguir esses sonhos, uma linha de código de cada vez! 🚀 ",
      fullTextSecond:
        "Sou apaixonado por músicas como folk, clássica, rock e soul. As músicas instrumentais me ajudam a relaxar, enquanto as composições clássicas me oferecem uma elegância atemporal. A energia visceral do rock alimenta minha paixão, e os vocais do Soul falam à minha alma. Me sinto enriquecido por cada um desses gêneros. Livros, cinema e arte são parte de interesses dos quais eu vejo sendo fundamentais a experiência humana.",
      displayedTextFirst: "",
      displayedTextSecond: "",
      typingSpeed: 50,
      isLightsUp: true,
      isShow: true,
    };
  },

  methods: {
    toggleClasses() {
      this.isLightsUp = !this.isLightsUp;
      this.isShow = !this.isShow;
      if (this.isShow) {
        this.displayedTextSecond = "";
        this.startTypingFirst();
      } else {
        this.displayedTextFirst = "";
        this.startTypingSecond();
      }
    },
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
    startTypingSecond() {
      this.displayedTextSecond = "";
      let index = 0;
       const interval = setInterval(() => {
        if (index < this.fullTextSecond.length) {
          this.displayedTextSecond += this.fullTextSecond[index];
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
  width: 55%;
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
.btn-links .lights {
  display: flex;
  flex-direction: row;
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
.lightsUp {
  box-shadow: 2px 0px 6px 1px white;
  color: white;
  background-color: white;
  transition: 0.5s;
}
.lightsDown {
  color: #646464;
  background-color: #646464;
  transition: 0.5s;
}
.hide {
  height: 0;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.8s ease, height 0.8s ease;
}

.show {
  height: auto;
  visibility: visible;
  opacity: 1;
  transition: opacity 0.8s ease, height 0.8s ease;
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
