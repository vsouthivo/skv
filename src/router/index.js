import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EditUpdateComponentVue from '@/components/core/Edit&updateComponent.vue'
import ListComponentVue from '@/components/core/ListComponent.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/EditAndUpdate/:id',
    name: 'EditUpdateComponentVue',
    component: EditUpdateComponentVue
  },{
    path: '/show',
    name: 'ListComponentVue',
    component: ListComponentVue
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
