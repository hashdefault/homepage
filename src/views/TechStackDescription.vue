<template>
  <div class="description">
    <table class="table_container" >
      <tbody>
        <tr>
          <td class="desc_td"><i class="fa fa-arrow-right"></i> Frontend</td>
          <td>
            <img
              height="50"
              width="50"
              :src="getImage('Vue.js.png')"
              alt="Vue.js"
              @mouseover="showTooltip($event)"
              @mouseout="hideTooltip($event)"
            />
            <span class="tooltip">{{ altText }}</span>
          </td>
          <td>
            <img
              height="50"
              width="50"
              :src="getImage('NPM.png')"
              alt="NPM"
              @mouseover="showTooltip($event)"
              @mouseout="hideTooltip($event)"
            />
            <span class="tooltip">{{ altText }}</span>
          </td>
          <td>
            <img
              height="50"
              width="50"
              :src="getImage('JavaScript.png')"
              alt="JavaScript"
              @mouseover="showTooltip($event)"
              @mouseout="hideTooltip($event)"
            />
            <span class="tooltip">{{ altText }}</span>
          </td>
          <td>
            <img
              height="50"
              width="50"
              :src="getImage('jQuery.png')"
              alt="jQuery"
              @mouseover="showTooltip($event)"
              @mouseout="hideTooltip($event)"
            />
            <span class="tooltip">{{ altText }}</span>
          </td>
        </tr>
        <tr>
          <td class="desc_td"><i class="fa fa-arrow-right"></i> Backend</td>
          <td>
            <img
              height="50"
              width="50"
              :src="getImage('Lua.png')"
              alt="Lua"
              @mouseover="showTooltip($event)"
              @mouseout="hideTooltip($event)"
            />
            <span class="tooltip">{{ altText }}</span>
          </td>

          <td>
            <img
              height="50"
              width="50"
              :src="getImage('PHP.png')"
              alt="PHP"
              @mouseover="showTooltip($event)"
              @mouseout="hideTooltip($event)"
            />
            <span class="tooltip">{{ altText }}</span>
          </td>
          <td>
            <img
              height="50"
              width="50"
              :src="getImage('Laravel.png')"
              alt="Laravel"
              @mouseover="showTooltip($event)"
              @mouseout="hideTooltip($event)"
            />
            <span class="tooltip">{{ altText }}</span>
          </td>
          <td>
            <img
              height="50"
              width="50"
              :src="getImage('Composer.png')"
              alt="Composer"
              @mouseover="showTooltip($event)"
              @mouseout="hideTooltip($event)"
            />
            <span class="tooltip">{{ altText }}</span>
          </td>

          <td>
            <img
              height="50"
              width="50"
              :src="getImage('Python.png')"
              alt="Python"
              @mouseover="showTooltip($event)"
              @mouseout="hideTooltip($event)"
            />
            <span class="tooltip">{{ altText }}</span>
          </td>
          <td>
            <img
              height="50"
              width="50"
              :src="getImage('Django.png')"
              alt="Django"
              @mouseover="showTooltip($event)"
              @mouseout="hideTooltip($event)"
            />
            <span class="tooltip">{{ altText }}</span>
          </td>
        </tr>

        <tr>
          <td class="desc_td"><i class="fa fa-arrow-right"></i> Container</td>
          <td>
            <img
              height="50"
              width="50"
              :src="getImage('Docker.png')"
              alt="Docker"
              @mouseover="showTooltip($event)"
              @mouseout="hideTooltip($event)"
            />
            <span class="tooltip">{{ altText }}</span>
          </td>
        </tr>

        <tr>
          <td class="desc_td">
            <i class="fa fa-arrow-right"></i> Controle de versão
          </td>
          <td>
            <img
              height="50"
              width="50"
              :src="getImage('Git.png')"
              alt="Git"
              @mouseover="showTooltip($event)"
              @mouseout="hideTooltip($event)"
            />
            <span class="tooltip">{{ altText }}</span>
          </td>
        </tr>
        <tr>
          <td class="desc_td">
            <i class="fa fa-arrow-right"></i> Editor de texto
          </td>
          <td>
            <img
              height="50"
              width="50"
              :src="getImage('Vim.png')"
              alt="Neovim"
              @mouseover="showTooltip($event)"
              @mouseout="hideTooltip($event)"
            />
            <span class="tooltip">{{ altText }}</span>
          </td>
        </tr>
        <tr>
          <td class="desc_td"><i class="fa fa-arrow-right"></i> Nuvem</td>
          <td>
            <img
              height="50"
              width="50"
              :src="getImage('AWS.png')"
              alt="AWS"
              @mouseover="showTooltip($event)"
              @mouseout="hideTooltip($event)"
            />
            <span class="tooltip">{{ altText }}</span>
          </td>
        </tr>

        <tr>
          <td class="desc_td">
            <i class="fa fa-arrow-right"></i> Sistema Operacional
          </td>
          <td>
            <img
              height="50"
              width="50"
              :src="getImage('ArchLinux.png')"
              alt="Arch Linux"
              @mouseover="showTooltip($event)"
              @mouseout="hideTooltip($event)"
            />
            <span class="tooltip">{{ altText }}</span>
          </td>
          <td>
            <img
              height="50"
              width="50"
              :src="getImage('Ubuntu.png')"
              alt="Ubuntu"
              @mouseover="showTooltip($event)"
              @mouseout="hideTooltip($event)"
            />
            <span class="tooltip">{{ altText }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "TechStackDescription",
  mounted() {},

  data() {
    return {
      altText: "",
      images: {}, // To store imported images
    };
  },
  created() {
    this.importImages();
  },
  props: {
    isTechStackActive: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    importImages() {
      const context = require.context(
        "@/assets/images/tech_icons",
        false,
        /\.png$/
      );
      this.images = context.keys().reduce((images, key) => {
        const fileName = key.replace("./", ""); // Clean the file name
        images[fileName] = context(key); // Store the image in the object
        return images;
      }, {});
    },
    getImage(imageName) {
      return this.images[imageName] || ""; // Return image URL or an empty string if not found
    },
    showTooltip(event) {
      const spanAlt = event.target.nextSibling;
      spanAlt.textContent = event.target.alt;
      spanAlt.style.opacity = 1;
    },
    hideTooltip(event) {
      const spanAlt = event.target.nextSibling;
      spanAlt.style.opacity = 0;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=VT323&display=swap");

.description {
  display: flex;
  padding: 25px;
  width: 40%;
  flex-direction: column;
  justify-content: flex-start;
  background-color: rgb(22, 22, 22);
  margin: -1px;
}
i {
  color: rgb(0, 255, 255);
}

.desc_td {
  font-size: 20px;
  font-family: "Courier Prime", monospace;
  font-weight: 700;
  font-style: normal;
  color: white;
  font-style: normal;
}
.table_container {
  width: 100%;
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}

.table_container td {
  padding: 12px;
}
img {
  background-color: rgb(240, 240, 240);
  border-radius: 20px;
  padding: 5px;
}
.tooltip {
  color: black;
  position: absolute;
  transition: opacity 0.3s;
  font-size: 10px;
  border-radius: 3px;
  padding: 2px;
  opacity: 0;
  border: 1px solid white;
  background-color: rgba(255, 255, 242, 0.75);
}
.tooltipOn {
  opacity: 1;
}

@media (min-width: 0px) and (max-width: 768px) {
  .description {
    width: 70%;
  }
  img {
    padding: 2px;
    height: 20px;
    width: 20px;
  }
  .desc_td {
    font-size: 13px;
    margin: 0;
    padding: 0;
  }
  .table_container td {
    padding: 1px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .description {
    width: 70%;
  }
  img {
    padding: 5px;
    height: 40px;
    width: 40px;
  }
  .desc_td {
    font-size: 19px;
  }
  .table_container td {
    padding: 4px;
  }
}
</style>
