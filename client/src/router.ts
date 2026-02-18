import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    component: () => import("@/pages/Layout.vue"),
    meta: {
      requiresAuth: true,
      breadcrumb: [{ label: "Dashboard", to: "/dashboard" }],
      title: "Toolbox - Dashboard",
    },
    children: [
      {
        path: "", // rota filha vazia
        name: "dashboard", // nome único
        component: () => import("@/pages/Dashboard.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
