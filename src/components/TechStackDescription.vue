<template>
  <div class="description">
    <table class="table_container">
      <tbody>
        <tr>
          <td class="desc_td">Frontend</td>
          <td>
            <img
              height="50"
              width="50"
              :src="getImage('Vue.js.png')"
              alt="Vue.js"
            />
          </td>
          <td>
            <img height="50" width="50" :src="getImage('NPM.png')" alt="NPM" />
          </td>
          <td>
            <img
              height="50"
              width="50"
              :src="getImage('JavaScript.png')"
              alt="JavaScript"
            />
          </td>
          <td>
            <img
              height="50"
              width="50"
              :src="getImage('jQuery.png')"
              alt="jQuery"
            />
          </td>
        </tr>
        <tr>
          <td class="desc_td">Backend</td>
          <td>
            <img height="50" width="50" :src="getImage('Lua.png')" alt="PHP" />
          </td>

          <td>
            <img height="50" width="50" :src="getImage('PHP.png')" alt="PHP" />
          </td>
          <td>
            <img
              height="50"
              width="50"
              :src="getImage('Laravel.png')"
              alt="PHP"
            />
          </td>
          <td>
            <img
              height="50"
              width="50"
              :src="getImage('Composer.png')"
              alt="Composer"
            />
          </td>

          <td>
            <img
              height="50"
              width="50"
              :src="getImage('Python.png')"
              alt="PHP"
            />
          </td>
          <td>
            <img
              height="50"
              width="50"
              :src="getImage('Django.png')"
              alt="PHP"
            />
          </td>
        </tr>

        <tr>
          <td class="desc_td">Container</td>
          <td>
            <img
              height="50"
              width="50"
              :src="getImage('Docker.png')"
              alt="Docker"
            />
          </td>
        </tr>

        <tr>
          <td class="desc_td">Controle de versão</td>
          <td>
            <img height="50" width="50" :src="getImage('Git.png')" alt="Git" />
          </td>
        </tr>
        <tr>
          <td class="desc_td">Editor de texto</td>
          <td>
            <img
              height="50"
              width="50"
              :src="getImage('Vim.png')"
              alt="Neovim"
            />
          </td>
        </tr>
        <tr>
          <td class="desc_td">Nuvem</td>
          <td>
            <img height="50" width="50" :src="getImage('AWS.png')" alt="AWS" />
          </td>
        </tr>

        <tr>
          <td class="desc_td">Sistema Operacional</td>
          <td>
            <img
              height="50"
              width="50"
              :src="getImage('ArchLinux.png')"
              alt="Arch Linux"
            />
          </td>
          <td>
            <img
              height="50"
              width="50"
              :src="getImage('Ubuntu.png')"
              alt="Image Name"
            />
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
      images: {}, // To store imported images
    };
  },
  created() {
    this.importImages();
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=VT323&display=swap");

.description {
  width: 100%;
  padding: 20px;
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
}
.table_container td {
  padding: 10px;
}

@media (max-width: 768px) {
  .description {
    width: 90%;
    padding: 0;
  }
}
</style>
