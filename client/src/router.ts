import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/panel",
  },
  {
    path: "/panel",
    component: () => import("@/pages/Layout.vue"),
    meta: {
      requiresAuth: true,
      breadcrumb: [{ label: "Painel", to: "/panel" }],
      title: "Toolbox - Painel",
    },
    children: [
      {
        path: "",
        name: "Panel",
        component: () => import("@/pages/Panel.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
