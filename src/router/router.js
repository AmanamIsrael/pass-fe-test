import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "dashboard",
      title: "Dashboard",
      component: () => import("@/pages/DashboardPage.vue"),
    },
    {
      path: "/activity",
      name: "activity",
      title: "Activity",
      component: () => import("@/pages/ActivityPage.vue"),
    },
    {
      path: "/invoices",
      name: "invoices",
      title: "Invoices",
      component: () => import("@/pages/InvoicesPage.vue"),
    },
    {
      path: "/help",
      name: "help",
      title: "Help",
      component: () => import("@/pages/HelpPage.vue"),
    },
    {
      path: "/wallet",
      name: "wallet",
      title: "Wallet",
      component: () => import("@/pages/WalletPage.vue"),
    },
  ],
});

export default router;
