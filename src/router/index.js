import { createRouter, createWebHistory } from 'vue-router'
import MainMenuView from '../views/MainMenuView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainMenuView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    { path: '/MainMenu',
      name: 'Menu',
      component: () => import('../views/MainMenuView.vue')

    },
    { path: '/ex1',
      name: 'ex1',
      component: () => import('../views/ex1View.vue')

    },
    { path: '/ex2',
      name: 'ex2',
      component: () => import('../views/ex2View.vue')

    },
    { path: '/ex3',
      name: 'ex3',
      component: () => import('../views/ex3View.vue')

    }
  ]
})

export default router
