import { createWebHistory, createRouter } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import BlogPage from "../pages/BlogPage.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      name: "homepage",
      path: "/",
      component: HomePage,
    },
    {
      name: "blog",
      path: "/blog",
      component: BlogPage,
    },
  ],
});

export { router };
