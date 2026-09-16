import { nextTick } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", name: "accueil", component: HomePage },
    {
      path: "/projet/:slug",
      name: "projet",
      component: () => import("./pages/ProjectDetail.vue"),
    },
  ],
  async scrollBehavior(to, from, savedPosition) {
    await nextTick();
    await new Promise((resolve) => requestAnimationFrame(resolve));
    if (savedPosition) return savedPosition;
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches
      ? "instant"
      : "smooth";
    if (to.hash) return { el: to.hash, top: 90, behavior };
    return { top: 0, behavior: "instant" };
  },
});
export default router;
