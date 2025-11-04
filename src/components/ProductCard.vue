<script setup>
import { defineProps } from 'vue';

defineProps({
  product: {
    type: Object,
    required: true,
  }
});

function showAlert(description) {
  alert(description);
}
</script>

<template>
  <div class="card h-100 shadow-sm">
    <img :src="product.imageUrl" class="card-img-top" alt="Produktbild">
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{{ product.title }}</h5>
      <p class="card-text text-accent fw-bold">{{ product.price }} €</p>
      <a class="btn btn-accent mt-auto" @click.prevent="showAlert(product.description)">
        Details
      </a>
      <router-link :to="`/edit/${product.id}`" class="btn btn-secondary mt-2">
        Bearbeiten
      </router-link>
    </div>
  </div>
</template>

<style scoped>
</style>