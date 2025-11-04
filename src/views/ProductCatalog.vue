<script setup>
import { ref, onMounted } from 'vue';
import ProductCard from '@/components/ProductCard.vue';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
const products = ref([]);

onMounted(async () => {
  console.log('API Base URL:', apiBaseUrl);
  await fetchProducts();
});

async function fetchProducts() {
  try {
    const response = await fetch(apiBaseUrl + '/api/product');
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
  <!-- Category Header -->
  <section class="py-5 text-center">
    <div class="container">
      <h2 class="fw-bold">Produkte</h2>
      <p>Entdecke unsere Auswahl an hochwertigen Produkten für Anfänger und Profis.</p>
      <router-link to="/create" class="btn btn-accent">Neues Produkt</router-link>
    </div>
  </section>

  <!-- Product Grid -->
  <div class="container py-4">
    <div class="row g-4">
      <div v-for="product in products" :key="product.id" class="col-md-4">
        <ProductCard :product="product"/>
      </div>
    </div>
  </div>
</template>

<style scoped></style>