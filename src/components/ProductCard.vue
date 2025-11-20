<script setup>
import NavButton from '@/components/NavButton.vue';

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
      <NavButton variant="accent" class="mt-auto" :to="`/product/view/${product.id}`">
        Details
      </NavButton>
      <NavButton variant="secondary" class="mt-auto" :to="`/product/edit/${product.id}`">
        Bearbeiten
      </NavButton>
    </div>
  </div>
</template>