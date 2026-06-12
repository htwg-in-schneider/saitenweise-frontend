<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuth0 } from '@auth0/auth0-vue';
import Button from '@/components/Button.vue';
import NavButton from '@/components/NavButton.vue';
import AppAlert from '@/components/AppAlert.vue';

const route = useRoute();
const router = useRouter();
const { getAccessTokenSilently } = useAuth0();
const url = `${import.meta.env.VITE_API_BASE_URL}/api/product`;
const categoryUrl = `${import.meta.env.VITE_API_BASE_URL}/api/category`;

const product = ref({});
const categories = ref([]);
const translations = ref({});
const notification = ref({ message: '', type: 'info' });
const showDeleteModal = ref(false);

function showNotification(message, type = 'info') {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  notification.value = { message, type };
}

onMounted(async () => {
  await Promise.all([fetchCategories(), fetchTranslations(), fetchProduct()]);
});

async function fetchCategories() {
  try {
    const response = await fetch(categoryUrl);
    if (response.ok) {
      categories.value = await response.json();
    }
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
}

async function fetchTranslations() {
  try {
    const response = await fetch(`${categoryUrl}/translation`);
    if (response.ok) {
      translations.value = await response.json();
    }
  } catch (error) {
    console.error('Error fetching translations:', error);
  }
}

async function fetchProduct() {
  const productId = route.params.id;
  try {
    const response = await fetch(`${url}/${productId}`);
    if (!response.ok) {
      throw new Error(`Produkt nicht gefunden: ${response.status}`);
    }
    product.value = await response.json();
    product.value.category = product.value.category ?? '';
  } catch (error) {
    console.error('Fehler beim Laden des Produkts:', error);
    showNotification(`Produkt konnte nicht geladen werden: ${error.message}`, 'danger');
    setTimeout(() => router.push('/'), 2500);
  }
}

async function updateProduct() {
  try {
    const token = await getAccessTokenSilently();
    const response = await fetch(`${url}/${product.value.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(product.value),
    });
    if (!response.ok) {
      throw new Error(`Fehler beim Aktualisieren: ${response.status}`);
    }
    showNotification('Produkt erfolgreich aktualisiert!', 'success');
    setTimeout(() => router.push('/'), 1500);
  } catch (error) {
    console.error('Fehler beim Aktualisieren des Produkts:', error);
    showNotification(`Produkt konnte nicht aktualisiert werden: ${error.message}`, 'danger');
  }
}

function deleteProduct() {
  showDeleteModal.value = true;
}

async function confirmDelete() {
  showDeleteModal.value = false;
  try {
    const token = await getAccessTokenSilently();
    const response = await fetch(`${url}/${product.value.id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    if (!response.ok) {
      throw new Error(`Fehler beim Löschen: ${response.status}`);
    }
    showNotification('Produkt erfolgreich gelöscht!', 'success');
    setTimeout(() => router.push('/'), 1500);
  } catch (error) {
    console.error('Fehler beim Löschen des Produkts:', error);
    showNotification(`Produkt konnte nicht gelöscht werden: ${error.message}`, 'danger');
  }
}
</script>

<template>
  <div class="container py-5">
    <h2 class="fw-bold mb-4">Produkt bearbeiten</h2>

    <AppAlert
      :message="notification.message"
      :type="notification.type"
      @dismiss="notification.message = ''"
    />

    <!-- Image Preview -->
    <div class="text-center mb-4">
      <img :src="product.imageUrl" alt="Produktbild" class="img-fluid" style="max-height: 300px;" />
    </div>

    <form @submit.prevent="updateProduct">
      <div class="mb-3">
        <label for="productId" class="form-label">Produkt ID</label>
        <input type="text" id="productId" class="form-control" v-model="product.id" readonly />
      </div>
      <div class="mb-3">
        <label for="productName" class="form-label">Name</label>
        <input type="text" id="productName" class="form-control" v-model="product.title" />
      </div>
      <div class="mb-3">
        <label for="productCategory" class="form-label">Kategorie</label>
        <select id="productCategory" class="form-select" v-model="product.category">
          <option value="">Bitte wählen</option>
          <option v-for="category in categories" :key="category" :value="category">
            {{ translations[category] || category }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label for="productPrice" class="form-label">Preis</label>
        <input type="number" id="productPrice" class="form-control" v-model="product.price" />
      </div>
      <div class="mb-3">
        <label for="productImageUrl" class="form-label">Bild-URL</label>
        <input type="text" id="productImageUrl" class="form-control" v-model="product.imageUrl" />
      </div>
      <div class="mb-3">
        <label for="productDescription" class="form-label">Beschreibung</label>
        <textarea id="productDescription" class="form-control" v-model="product.description"></textarea>
      </div>
      <NavButton variant="secondary" class="me-2" to="/">Zurück</NavButton>
      <Button type="submit" variant="accent">Aktualisieren</Button>
      <Button type="button" variant="danger" class="ms-2" @click="deleteProduct">Löschen</Button>
    </form>

    <!-- Delete Confirmation Modal -->
    <div v-if="showDeleteModal" class="modal d-block" tabindex="-1" @click.self="showDeleteModal = false"
      style="background: rgba(0,0,0,0.5);">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Produkt löschen</h5>
            <button type="button" class="btn-close" @click="showDeleteModal = false"></button>
          </div>
          <div class="modal-body">
            Möchten Sie das Produkt <strong>{{ product.title }}</strong> wirklich löschen?
            Diese Aktion kann nicht rückgängig gemacht werden.
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="showDeleteModal = false">Abbrechen</button>
            <button type="button" class="btn btn-danger" @click="confirmDelete">Löschen</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
}
</style>
