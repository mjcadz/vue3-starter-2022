import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { appRoutes } from './routes'

const routes: Array<RouteRecordRaw> = [...appRoutes]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
