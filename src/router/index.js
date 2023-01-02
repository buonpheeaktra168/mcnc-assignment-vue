import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/auth/view/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/auth/view/RegisterView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/abouts/views/AboutView.vue'),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/account',
      name: 'acount',
      component: () => import('@/views/accounts/views/AccountView.vue')
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('@/views/todos/views/TodoView.vue')
    }, 
    {
      path: '/todolist',
      name: 'todoList',
      component: () => import('@/views/todos/views/TodoListView.vue')
    },
    {
      path: '/todofirebase',
      name: 'todoFirebase',
      component: () => import('@/views/todos/views/TodoFirebase.vue')
    },
    {
      path: '/todofirebasePinia',
      name: 'todoFirebasePinia',
      component: () => import('@/views/todos/views/TodoFirebasePinia.vue')
    },
    {
      path: '/notification',
      name: 'notification',
      component: () => import('@/views/notifications/view/NotificationView.vue')
    },
    {
      path: '/fetchUser',
      name: 'fetchUser',
      component: () => import('@/views/notifications/view/FetchUserFromStoreView.vue')
    },
    {
      path: '/postRequest',
      name: 'postRequest',
      component: () => import('@/views/notifications/view/PostRequestView.vue')
    }
  ]
})

export default router
