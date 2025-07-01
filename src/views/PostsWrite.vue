<template>
  <div class="description" id='ref_id' v-if="page">
  </div>
</template>
<script>
import { marked } from "marked"
export default {
  name: "WritingPosts",

  async mounted() {
    await this.loadContent();
  },
  data() {
    return {
      page: 'hypreww'
    };
  },
  watch: {
    page() {
      this.loadContent(); // Reload content when `page` changes
    },
  },
  methods: {
    async loadContent() {
      if (!this.page) return;
      try {
        const response = await fetch(`/postscontent/${this.page}/index.md`);
        if (!response.ok) throw new Error("Failed to fetch content");

        const text = await response.text();
        document.getElementById("ref_id").innerHTML = marked(text);
      } catch (error) {
        console.error("Error loading post:", error);
      }
    },


  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=VT323&display=swap");

.description {
  padding: 25px;
  color: white;
  font-family: "Arial";
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: rgb(22, 22, 22);
  margin: -1px;
}


@media (max-width: 768px) {
  .description {
    width: 70%;
  }

}
</style>
