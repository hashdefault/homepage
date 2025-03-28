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
      page: 1
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
        const response = await fetch(`/postscontent/${this.page}.md`);
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=VT323&display=swap");

.description {
  padding: 25px;
  color: white;
  font-family: "Courier Prime";
  width: 55%;
  display: flex;
  flex-direction: column;
  background-color: rgb(22, 22, 22);
  margin: -1px;
}

@media (max-width: 768px) {
  .description {
    width: 80%;
  }
}
</style>
