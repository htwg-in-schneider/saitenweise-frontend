import { createRouter, createWebHistory } from 'vue-router';
import { authGuard } from '@auth0/auth0-vue'
import ProductCatalog from '@/views/ProductCatalog.vue';
import ProductDetail from '@/views/ProductDetail.vue';
import CreateProduct from '@/views/CreateProduct.vue';
import EditProduct from '@/views/EditProduct.vue';
import Profile from '@/views/Profile.vue';

const routes = [
  { path: '/', component: ProductCatalog },
  {
    path: '/product/view/:id',
    name: 'product',
    component: ProductDetail
  },
  {
    path: '/product/create',
    component: CreateProduct,
    beforeEnter: authGuard
  },
  {
    path: '/product/edit/:id',
    component: EditProduct,
    beforeEnter: authGuard
  },
  {
    path: '/profile',
    component: Profile,
    beforeEnter: authGuard
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;