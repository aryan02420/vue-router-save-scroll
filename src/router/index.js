import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      scrollPos: {
        top: 0,
        left: 0,
      },
    },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

const scrollBehavior = (to, from, savedPosition) => {
  if (to.name === from.name) {
    to.meta?.scrollPos && (to.meta.scrollPos.top = 0)
    return { left: 0, top: 0 }
  }
  const scrollpos = savedPosition || to.meta?.scrollPos || { left: 0, top: 0 }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(scrollpos)
    }, 600)
  })
}

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior,
})

router.beforeEach((to, from, next) => {
  from.meta?.scrollPos && (from.meta.scrollPos.top = window.scrollY)
  return next()
})

export default router
