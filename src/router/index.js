import { createRouter, createWebHistory } from 'vue-router';
import ProductCatalog from '@/views/ProductCatalog.vue';

const routes = [
  { path: '/', component: ProductCatalog },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;