<script setup>
import { ref } from 'vue';

const showBanner = ref(true);

function closeBanner() {
    showBanner.value = false;
}
</script>

<template>
  <!-- Special Banner -->
  <div id="specialbanner" class="text-center py-3" v-if="showBanner">
    Nur heute 10% Rabatt mit dem Code "HAPPY10"&nbsp;&nbsp;
    <button type="button" class="btn btn-dark" @click="closeBanner">Verstanden!</button>
  </div>

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

  <!-- Category Header -->
  <section class="py-5 text-center">
    <div class="container">
      <h2 class="fw-bold">Geigen</h2>
      <p>Entdecke unsere Auswahl an hochwertigen Geigen für Anfänger und Profis.</p>
    </div>
  </section>

  <!-- Product Grid -->
  <div class="container py-4">
    <div class="row g-4">
      <!-- Product Card -->
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <img src="https://neshanjo.github.io/saitenweise-images/violin_beginner.jpg" class="card-img-top"
            alt="Produktbild">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">Violine Modell A</h5>
            <p class="card-text text-accent fw-bold">499,00 €</p>
            <a href="product.html" class="btn btn-accent mt-auto">Details</a>
          </div>
        </div>
      </div>
      <!-- Product Card -->
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <img src="https://neshanjo.github.io/saitenweise-images/violin_beginner.jpg" class="card-img-top"
            alt="Produktbild">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">Violine Modell B</h5>
            <p class="card-text text-accent fw-bold">799,00 €</p>
            <a href="product.html" class="btn btn-accent mt-auto">Details</a>
          </div>
        </div>
      </div>
      <!-- Product Card -->
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <img src="https://neshanjo.github.io/saitenweise-images/violin_pro.jpg" class="card-img-top"
            alt="Produktbild">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">Violine Modell C</h5>
            <p class="card-text text-accent fw-bold">1.299,00 €</p>
            <a href="product.html" class="btn btn-accent mt-auto">Details</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="text-center py-4">
    <p>&copy; 2025 Saitenweise. Alle Rechte vorbehalten.</p>
    <nav>
      <a href="/kontakt" class="footer-link" aria-label="Kontakt">Kontakt</a>
      <span aria-hidden="true" style="margin: 0 0.5rem">|</span>
      <a href="/datenschutz" class="footer-link" aria-label="Datenschutz">Datenschutz</a>
      <span aria-hidden="true" style="margin: 0 0.5rem">|</span>
      <a href="/impressum" class="footer-link" aria-label="Impressum">Impressum</a>
    </nav>
  </footer>
</template>
<style scoped></style>
