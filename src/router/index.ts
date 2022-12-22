import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '@/layouts/404.vue'

import auth from '@/router/auth'
import dashboard from './dashboard'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { ...dashboard },
    { ...auth },
    { path: '/:pathMatch(.*)*', component: NotFound },
  ]
})

router.afterEach((to, from, next: any) => {
  document.title = `${to.meta.title || 'Admin'}`
  if(!isLogin() && to.meta.auth){
    router.push('/auth/signin')
  }
})

const isLogin = () => {
  return localStorage.token
}

export default router
