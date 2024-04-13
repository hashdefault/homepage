<template>
  <div class="description">
    <ul>
      <a
        ref="link-p-code"
        @click="showText('link-p-code')"
        class="btn btn-link p-code"
        ><i class="fa fa-circle"></i>
      </a>
      <a
        ref="link-p-heart"
        @click="showText('link-p-heart')"
        class="btn btn-link p-heart"
        ><i class="fa fa-circle"></i
      ></a>
      <li>
        <p id="p-code">
          <i class="fa fa-code"></i>
          Minha jornada no mundo da programação começou na universidade,
          enquanto eu estava até os joelhos nas aulas de Física. Foi como
          tropeçar em um universo totalmente novo. Avançando para 2020, me vi
          mergulhando de cabeça no cenário tecnológico, trabalhando como
          desenvolvedor full-stack em uma empresa privada. Ser um desenvolvedor
          full-stack significa ter muitas funções, mas neste universo as vezes
          precisamos abraçar o caos e perseguir esses sonhos, uma linha de
          código de cada vez! 🚀
        </p>
      </li>
      <li>
        <p id="p-heart">
          <i class="fa fa-heart"></i>
          Sou apaixonado por músicas como folk, clássica, rock e soul. As
          músicas instrumentais me ajudam a relaxar, enquanto as composições
          clássicas me oferecem uma elegância atemporal. A energia visceral do
          rock alimenta minha paixão, e os vocais do Soul falam à minha alma. Me
          sinto enriquecido por cada um desses gêneros.
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeDescription",
  methods: {
    showText(btn_id) {
      const btn_element = this.$refs[btn_id];
      document
        .querySelectorAll("a.p-heart")[0]
        .childNodes[0].classList.remove("lightsUp");
      document
        .querySelectorAll("a.p-code")[0]
        .childNodes[0].classList.remove("lightsUp");
      document
        .querySelectorAll("a.p-code")[0]
        .childNodes[0].classList.remove("lightsDown");
      document
        .querySelectorAll("a.p-heart")[0]
        .childNodes[0].classList.remove("lightsDown");

      if (btn_element.classList.contains("p-code")) {
        document
          .querySelectorAll("a.p-heart")[0]
          .childNodes[0].classList.add("lightsDown");

        document.querySelectorAll("p#p-code")[0].style.display = "block";
        document.querySelectorAll("p#p-heart")[0].style.display = "none";
      } else if (btn_element.classList.contains("p-heart")) {
        document
          .querySelectorAll("a.p-code")[0]
          .childNodes[0].classList.remove("lightsUp");
        document
          .querySelectorAll("a.p-code")[0]
          .childNodes[0].classList.add("lightsDown");

        document.querySelectorAll("p#p-code")[0].style.display = "none";
        document.querySelectorAll("p#p-heart")[0].style.display = "block";
      }

      btn_element.childNodes[0].classList.add("lightsUp");
      return;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.description {
  width: 55%;
  padding-right: 30px;
}
ul {
  border: 1px solid grey;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  background-color: rgb(45, 45, 45);
}
ul li {
  list-style-type: none;
  text-align: left;
}
p::nth-of-type(1) {
  display: none;
  padding: 5px;
}
p {
  font-family: Nunito;
  color: white;
}
.btn {
  cursor: pointer;
}
a {
  margin-left: 25px;
  cursor: pointer;
  border-radius: 50%;
  border: none;
}
a i {
  color: #646464;
  background-color: #646464;
  border-radius: 50%;
  border: none;
}
.lightsUp {
  box-shadow: 2px 1px 3px 2px white;
  color: white;
  background-color: white;
  transition: 0.5s;
}
.lightsDown {
  color: #646464;
  background-color: #646464;
  transition: 0.5s;
}
p.hide {
}
</style>
