import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      scrollTop: 0,
    },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

const scrollBehavior = (to, from, savedPosition) => {
  return savedPosition || { top: to.meta?.scrollTop || 0, left: 0 }
}

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior,
})

router.beforeEach((to, from, next) => {
  console.log('window.scrollY:', window.scrollY)
  from.meta?.scrollTop && (from.meta.scrollTop = window.scrollY)
  console.log('from:\t', from.name, '\t', from.meta)
  console.log('to:\t\t', to.name, '\t', to.meta)
  return next()
})

export default router
