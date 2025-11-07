<script setup>
import placeholderImage from '@/assets/placeholder.jpg'; // Importieren des Bildes
import NavButton from '@/components/NavButton.vue';

defineProps({
  product: {
    type: Object,
    required: true,
  }
});
</script>

<template>
  <div class="card h-100 shadow-sm">
    <img :src="product.imageUrl ? product.imageUrl : placeholderImage" class="card-img-top" alt="Produktbild">
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{{ product.title }}</h5>
      <p class="card-text text-accent fw-bold">{{ product.price }} €</p>
      <NavButton variant="accent" class="mt-auto" :to="`/product/${product.id}`">
        Details
      </NavButton>
    </div>
  </div>
</template>