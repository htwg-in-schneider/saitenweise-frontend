<script setup>
// No additional logic needed for App.vue
</script>

<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
    <div class="container">
      <a class="navbar-brand fw-bold text-accent" href="index.html">
        <img src="./assets/saitenweise-logo-small.png" alt="Saitenweise Logo" height="100" class="me-2">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
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

  <!-- Main Content -->
  <router-view></router-view>

  <!-- Footer -->
  <footer class="text-center py-4">
    <p>&copy; 2025 Saitenweise. Alle Rechte vorbehalten.</p>
  </footer>
</template>

<style scoped></style>
