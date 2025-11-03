import { createRouter, createWebHistory } from 'vue-router';
import EditProduct from '@/views/EditProduct.vue';
import ProductCatalog from '@/views/ProductCatalog.vue';
import CreateProduct from '@/views/CreateProduct.vue';

const routes = [
  { path: '/', component: ProductCatalog },
  { path: '/create', component: CreateProduct },
  { path: '/edit/:id', component: EditProduct },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;