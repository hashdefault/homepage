<template>
  <div class="description">
    <article id='ref_id' v-if="page">
    </article>
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

<style>
@import url("https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=VT323&display=swap");

.description article {
  padding: 25px;
  color: white;
  font-family: "Arial";
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: rgb(22, 22, 22);
  margin: -1px;
}


.description article h2 {
  border-left: 3px solid rgba(130, 20, 180, 0.8);
  padding-left: 10px;

}

.description h3 {
  /* Your styles here */
  background-color: rgba(100, 20, 230, 0.3);
  padding: 8px;
  border-radius: 3px;
  border-left: 4px solid rgb(100, 20, 230);
  padding-left: 10px;
  font-weight: 400;
  width: 99%;
}

div.description article p a:hover {
  text-decoration: underline;
}

div.description article p a {
  text-decoration: none;
  color: wheat;
}

.description blockquote {
  border-left: 5px solid rgba(100, 120, 200, 0.8);
  padding-left: 20px;
  background-color: rgba(80, 80, 80, 0.6);
  width: 99%;
  margin-left: 2px;
  margin-right: 2px;
  max-height: 500px;
  overflow-y: auto;
  border-radius:3px;

}
</style>
