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
          <li class="nav-item"><a class="nav-link active" href="#">Geigen</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Bratschen</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Celli</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Kontrabässe</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Zubehör</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>