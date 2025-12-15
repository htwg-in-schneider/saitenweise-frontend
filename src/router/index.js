import { createRouter, createWebHistory } from 'vue-router';
import { authGuard } from '@auth0/auth0-vue'
import ProductCatalog from '@/views/ProductCatalog.vue';
import ProductDetail from '@/views/ProductDetail.vue';
import CreateProduct from '@/views/CreateProduct.vue';
import EditProduct from '@/views/EditProduct.vue';
import Profile from '@/views/Profile.vue';
import CheckoutView from '@/views/CheckoutView.vue';

const routes = [
  { path: '/', component: ProductCatalog },
  {
    path: '/product/view/:id',
    name: 'product',
    component: ProductDetail,
    props: true
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
  {
    path: '/checkout',
    component: CheckoutView,
    beforeEnter: authGuard
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;