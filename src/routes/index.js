import { createRouter, createWebHistory } from "vue-router";
import HomePage from './../views/HomePage.vue'
import PostsWrite from './../views/PostsWrite.vue'
import PortfolioList from './../views/PortfolioList.vue'
import TechStackDescription from './../views/TechStackDescription.vue'
import DigitalArts from './../components/DigitalArts.vue'


const routes = [
  { path: "/", component: HomePage },
  { path: "/posts", component: PostsWrite },
  { path: "/techstack", component: TechStackDescription },
  { path: "/portfolio", component: PortfolioList },
  { path: "/digitalarts", component: DigitalArts },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
