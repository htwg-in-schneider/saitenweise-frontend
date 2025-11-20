<script setup>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import SpecialBanner from '@/components/SpecialBanner.vue';
import ProductCard from '@/components/ProductCard.vue';
import { ref, onMounted } from 'vue';
const url = 'https://dummyjson.com/products';

const products = ref([]);
onMounted(async () => fetchProducts());

async function fetchProducts() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const dummyproducts = await response.json();
    // dummy products structure is
    //{
    //  "products": [
    //    {
    //      "id": 1,
    //      "title": "Essence Mascara Lash Princess",
    //      "description": "The best mascara for beautiful lashes",
    //      "price": 9.99,
    //      "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
    //    }, ... 
    //   ]
    // }
    // which must be adapted to our product structure
    // {
    //   id: 1,
    //   title: "Geige Modell 1234",
    //   description:
    //       "Eine hochwertige Geige, welche schon alle Konzerthäuser dieser Welt gesehen hat.",
    //   category: "VIOLIN",
    //   price: 1234.0,
    //   imageUrl: "https://neshanjo.github.io/saitenweise-images/violin_pro.jpg",
    // },
    products.value = dummyproducts.products.map(dummyproduct => ({
      id: dummyproduct.id,
      title: dummyproduct.title,
      description: dummyproduct.description,
      price: dummyproduct.price,
      imageUrl: dummyproduct.thumbnail
    }));
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

  <!-- Product Grid -->
  <div class="container py-4">
    <div class="row g-4">
      <div v-for="product in products" :key="product.id" class="col-md-4">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>

  <Footer />
</template>

<style scoped></style>