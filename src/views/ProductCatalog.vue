<script setup>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import NavButton from '@/components/NavButton.vue';
import SpecialBanner from '@/components/SpecialBanner.vue';
import ProductCard from '@/components/ProductCard.vue';
import ProductFilter from '@/components/ProductFilter.vue';
import { ref, onMounted } from 'vue';

const url = 'http://localhost:8081/api/product';

const products = ref([]);

onMounted(async () => {
  fetchProducts();
});

async function fetchProducts(filters = {}) {
  try {
    const params = new URLSearchParams();
    if (filters.name) {
      params.append('name', filters.name);
    }
    if (filters.category) {
      params.append('category', filters.category);
    }

    const response = await fetch(`${url}?${params.toString()}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    products.value = await response.json();
    console.log(products.value);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}
</script>

<template>
  <SpecialBanner text='Nur heute 10% Rabatt mit dem Code "HAPPY10"' />
  <Navbar />

  <!-- Category Header -->
  <section class="py-5 text-center">
    <div class="container">
      <h2 class="fw-bold">Produkte</h2>
      <p>Entdecke unsere Auswahl an hochwertigen Produkten für Anfänger und Profis.</p>
    </div>
  </section>

  <!-- Search and Filter -->
  <ProductFilter @product-update="fetchProducts" />

  <!-- Product Grid -->
  <div class="container py-4">
    <div class="row g-4">
      <div v-for="product in products" :key="product.id" class="col-md-4">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>

  <div class="container py-4">
    <div class="row g-4 text-center">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <NavButton to="/product/create">Neues Produkt</NavButton>
      </div>
      <div class="col-md-4"></div>
      
    </div>
  </div>

  <Footer />
</template>

<style scoped></style>