import { createWebHistory, createRouter } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import Portfolio from "../pages/portfolio.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      name: "homepage",
      path: "/",
      component: HomePage,
    },
    {
      name: "portfolio",
      path: "/portfolio",
      component: Portfolio,
    },
  ],
});

export { router };
