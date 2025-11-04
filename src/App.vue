<script setup>
import Footer from '@/components/Footer.vue';
import Navbar from './components/Navbar.vue';
import SpecialBanner from './components/SpecialBanner.vue';
</script>

<template>
  <SpecialBanner text='Nur heute 10% Rabatt mit dem Code "HAPPY10"'/>
  <Navbar />

  <!-- Main Content -->
  <router-view></router-view>

  <Footer />
</template>

<style scoped></style>
