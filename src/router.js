import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home'), // 동적 import
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About'),
  },
  {
    path: '/loop',
    name: 'Loop',
    component: () => import('@/views/Loop'),
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});