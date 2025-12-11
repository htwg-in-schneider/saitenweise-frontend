<script setup>
import NavButton from '@/components/NavButton.vue';
import placeholderImage from '@/assets/placeholder.jpg'; // Importieren des Bildes

defineProps({
  product: {
    type: Object,
    required: true,
  },
  showEditButton: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="card h-100 shadow-sm">
    <img :src="product.imageUrl ? product.imageUrl : placeholderImage" class="card-img-top" alt="Produktbild">
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{{ product.title }}</h5>
      <p class="card-text text-accent fw-bold">{{ product.price }} €</p>
      <NavButton variant="accent" class="mt-auto" :to="`/product/view/${product.id}`">
        Details
      </NavButton>
      <NavButton v-if="showEditButton" variant="secondary" class="mt-auto" :to="`/product/edit/${product.id}`">
        Bearbeiten
      </NavButton>
    </div>
  </div>
</template>