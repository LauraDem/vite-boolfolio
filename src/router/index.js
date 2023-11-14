import { createWebHistory, createRouter } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import Portfolio from "../pages/portfolio.vue";
import ProjectPage from "../pages/ProjectPage.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      name: "homepage",
      path: "/",
      component: HomePage,
    },
    {
      name: "project-detail",
      path: "/project-detail/:id",
      component: ProjectPage,
    },
    {
      name: "portfolio",
      path: "/portfolio",
      component: Portfolio,
    },
  ],
});

export { router };
