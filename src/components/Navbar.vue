<script setup>
import UserMenu from './UserMenu.vue'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
    <div class="container">
      <router-link class="navbar-brand fw-bold text-accent" to="/">
        <img src="../assets/saitenweise-logo-small.png" alt="Saitenweise Logo" height="100" class="me-2">
      </router-link>

      <div class="d-flex align-items-center order-lg-last">
        <router-link class="position-relative me-3 text-dark" to="/checkout" aria-label="Warenkorb">
          <i class="bi bi-cart3 fs-4"></i>
          <span v-if="cartStore.itemCount > 0"
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-accent">
            {{ cartStore.itemCount }}
          </span>
        </router-link>
        <UserMenu class="me-2 me-lg-0" />
        <button class="navbar-toggler ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-4">
          <li class="nav-item">
            <router-link class="nav-link active" :to="{ path: '/' }">Alle</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/', query: { category: 'VIOLIN' } }">Geigen</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/', query: { category: 'VIOLA' } }">Bratschen</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/', query: { category: 'CELLO' } }">Celli</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"
              :to="{ path: '/', query: { category: 'DOUBLE_BASS' } }">Kontrabässe</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/', query: { category: 'ACCESSORIES' } }">Zubehör</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>