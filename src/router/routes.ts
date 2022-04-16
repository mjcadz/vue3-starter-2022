import { RouteRecordRaw } from 'vue-router'

export const appRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Landing',
    component: () => import('@/views/Landing.vue'),
    meta: {
      layout: 'AppLayout',
    },
  },
]
