import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BootstrapView from '@/views/BootstrapView.vue'
import TaskView from '@/views/TaskView.vue'
//import CounterView from '@/views/CounterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/bs',
      name: 'bootstrap',
      component: BootstrapView
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: TaskView
    },
    {
      path: '/counter',
      name: 'counter',
      //component: CounterView
      component: () => import('@/views/CounterView.vue') //lazy loading: only load when needed
    }
  ]
})

export default router
