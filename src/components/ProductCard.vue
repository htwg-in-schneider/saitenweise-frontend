<script setup>
import Button from '@/components/Button.vue';

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
      <Button variant="accent" class="mt-auto" :onClick="() => showAlert(product.description)">
        Details
      </Button>
    </div>
  </div>
</template>

<style scoped>
</style>