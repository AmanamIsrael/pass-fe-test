import { createRouter, createWebHistory } from "vue-router";
import DashboardPage from "../pages/DashboardPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "dashboard",
      title: "Dashboard",
      component: DashboardPage,
      // children: [],
    },
  ],
});

export default router;
