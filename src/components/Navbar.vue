<script setup>
import UserMenu from './UserMenu.vue'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
    <div class="container">
      <router-link class="navbar-brand fw-bold text-accent" to="/">
        <img src="../assets/saitenweise-logo-small.png" alt="Saitenweise Logo" height="100" class="me-2">
      </router-link>

      <div class="d-flex align-items-center order-lg-last">
        <UserMenu class="me-2 me-lg-0" />
        <button class="navbar-toggler ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-4">
           <li class="nav-item">
            <router-link class="nav-link active" :to="{ path: '/'}">Alle</router-link>
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
            <router-link class="nav-link" :to="{ path: '/', query: { category: 'DOUBLE_BASS' } }">Kontrabässe</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/', query: { category: 'ACCESSORIES' } }">Zubehör</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>