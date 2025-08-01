<template>
  <div class='content_menu' id='content_menu'>
    <h4>Conteúdo</h4>
    <ul>
      <li class='links_ref'>
        <a @click="updateContent('hypreww')"> Hypreww Desktop </a>
      </li>
      <li class='links_ref'>
        <a @click="updateContent('notetaking')"> Como tomar notas ? </a>
      </li>
    </ul>
  </div>
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
    // Set custom renderer before loading content
    await this.loadContent();
    const links = document.querySelectorAll("div.description article a");

    for (const link of links) {
      if (link.href.startsWith('https://')) {
        link.target = '_blank'
      }
    }
  },
  data() {
    return {
      page: 'notetaking' //must be the last post
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

        var text = await response.text();
        text = text.replace(/!\[([^\]]*)\]\(\.\/(.*?)\)/g, (match, alt, path) => {
          return `![${alt}](/postscontent/${this.page}/${path})`;
        });
        document.getElementById("ref_id").innerHTML = marked(text);
      } catch (error) {
        console.error("Error loading post:", error);
      }
    },
    updateContent(name) {
      this.page = name
      return;
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=VT323&display=swap");


.content_menu {
  color: rgb(180, 180, 180);
  border-left: 4px solid rgba(50, 50, 90, 0.7);
  font-size: 17px;
  width: 45%;
}

.content_menu h4 {
  margin: 0;
  margin-top: 5px;
  margin-left: 20px;
  font-size: 24px;
}

.content_menu ul {
  padding: 5px;
}

.content_menu li.links_ref {
  list-style: none;
  border-left: 2px solid rgba(90, 140, 220, 0.7);
  margin: 10px;
  padding: 5px;
  padding-left: 15px;
  line-height: 15px;

}

.content_menu li.links_ref a:hover {
  color: white;
}

.content_menu li.links_ref a {
  cursor: pointer;
}

div.description:has(article) {
  margin-top: 50px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 1s ease-in forwards;
}


div.description article {
  padding: 25px;
  color: white;
  font-family: "Arial";
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: rgb(22, 22, 22);
  margin: -1px;
  transition: opacity 2s ease-in-out;
}


div.description article img {
  width: 100%;
  min-height: 20px;
}

div.description article h2 {
  border-left: 4px solid rgb(10, 180, 250);
  padding-left: 10px;

}

div.description article h3 {
  /* Your styles here */
  background-color: rgba(20, 80, 250, 0.2);
  padding: 8px;
  border-radius: 3px;
  border-left: 4px solid rgb(20, 80, 250, 0.4);
  padding-left: 10px;
  font-weight: 400;
  width: 99%;
}

div.description article a:hover {
  text-decoration: underline;
}

div.description article a {
  text-decoration: none;
  color: wheat;
}

div.description article blockquote {
  border-left: 5px solid rgba(0, 180, 250, 0.8);
  padding-left: 20px;
  background-color: rgba(80, 80, 80, 0.6);
  width: 99%;
  margin-left: 2px;
  margin-right: 2px;
  max-height: 500px;
  overflow-y: auto;
  border-radius: 3px;

}

div.description article li {
  padding: 4px;
}

div.description article li {
  list-style: none;
}
</style>
