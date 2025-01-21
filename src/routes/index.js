import { createRouter, createWebHistory } from "vue-router";
import HomePage from './../views/HomePage.vue'
import PostsWrite from './../views/PostsWrite.vue'
import VideosPage from './../views/VideosPage.vue'
import TechStackDescription from './../views/TechStackDescription.vue'


const routes = [
  { path: "/", component: HomePage },
  { path: "/posts", component: PostsWrite },
  { path: "/techstack", component: TechStackDescription },
  { path: "/videos", component: VideosPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
