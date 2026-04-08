import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'accueil',
    component: HomePage,
  },
  {
    path: '/projet/:slug',
    name: 'projet',
    component: () => import('./pages/ProjectDetail.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
