import { createRouter, createWebHistory } from 'vue-router';
import ProductCatalog from '@/views/ProductCatalog.vue';
import ProductDetail from '@/views/ProductDetail.vue';

const routes = [
  { path: '/', component: ProductCatalog },
  { 
    path: '/product/:id', 
    name: 'product',
    component: ProductDetail
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;