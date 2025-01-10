import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from './../views/HomePage.vue'
import PostsWrite from './../views/PostsWrite.vue'
import VideosPage from './../views/VideosPage.vue'


const routes = [
  { path: "/", component: HomePage },
  { path: "/posts", component: PostsWrite },
  { path: "/videos", component: VideosPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
