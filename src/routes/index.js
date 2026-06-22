import { createRouter, createWebHistory } from "vue-router";
import HomePage from './../views/HomePage.vue'
import PostsWrite from './../views/PostsWrite.vue'
import PortfolioList from './../views/PortfolioList.vue'
import TechStackDescription from './../views/TechStackDescription.vue'
import ContactPage from './../views/ContactPage.vue'

const routes = [
  { path: "/", component: HomePage },
  { path: "/posts", component: PostsWrite },
  { path: "/techstack", component: TechStackDescription },
  { path: "/portfolio", component: PortfolioList },
  { path: "/contato", component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
