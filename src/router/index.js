import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/account',
      name: 'acount',
      component: () => import('../views/AccountView.vue')
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('../views/TodoListView.vue')
    }, 
    {
      path: '/notification',
      name: 'notification',
      component: () => import('../views/notifications/view/NotificationView.vue')
    },
    {
      path: '/fetchUser',
      name: 'fetchUser',
      component: () => import('../views/notifications/view/FetchUserFromStoreView.vue')
    },
    {
      path: '/postRequest',
      name: 'postRequest',
      component: () => import('../views/notifications/view/PostRequestView.vue')
    }
  ]
})

export default router
