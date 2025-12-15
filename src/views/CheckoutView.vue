<script setup>
import { reactive } from 'vue';
import { useAuth0 } from '@auth0/auth0-vue';
import { useCartStore } from '@/stores/cart';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Button from '@/components/Button.vue';
import NavButton from '@/components/NavButton.vue';

const cartStore = useCartStore();
const { isAuthenticated, getAccessTokenSilently } = useAuth0();

const form = reactive({
    street: '',
    city: '',
    zipCode: '',
    country: 'Germany'
});

async function submitOrder() {
    if (cartStore.items.length === 0) {
        alert('Ihr Warenkorb ist leer.');
        return;
    }

    const orderData = {
        items: cartStore.items.map(item => ({
            productId: item.id,
            quantity: item.quantity
        })),
        address: { ...form }
    };

    try {
        const headers = {
            'Content-Type': 'application/json'
        };

        if (isAuthenticated.value) {
            const token = await getAccessTokenSilently();
            headers['Authorization'] = `Bearer ${token}`;
        }

        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/order`, {
            method: 'POST',
            headers,
            body: JSON.stringify(orderData)
        });

        if (response.ok) {
            // Ideally we might get a string back based on user prompt, but we handle whatever
            const text = await response.text();
            console.log('Order submitted successfully:', text);
            alert(text);
            cartStore.clearCart();
            // Reset form
            Object.assign(form, { street: '', city: '', zipCode: '', country: 'Germany' });
        } else {
            console.error('Order submission failed', response.status);
            alert('Fehler beim Absenden der Bestellung.');
        }

    } catch (error) {
        console.error('Error submitting order:', error);
        alert('Ein Fehler ist aufgetreten.');
    }
}

function removeItem(id) {
    cartStore.removeFromCart(id);
}

function updateQuantity(id, event) {
    const val = parseInt(event.target.value);
    if (val >= 0) {
        cartStore.updateQuantity(id, val);
    }
}
</script>

<template>
    <Navbar />
    <section class="container py-5">
        <h2 class="fw-bold mb-4">Checkout</h2>
        <div class="row">
            <!-- Cart Summary -->
            <div class="col-md-6 mb-4">
                <div class="card shadow-sm">
                    <div class="card-header bg-white">
                        <h4 class="mb-0">Warenkorb</h4>
                    </div>
                    <div class="card-body">
                        <div v-if="cartStore.items.length === 0" class="text-center py-4">
                            <p>Ihr Warenkorb ist leer.</p>
                            <NavButton to="/" variant="secondary">Zurück zum Shop</NavButton>
                        </div>
                        <div v-else>
                            <ul class="list-group list-group-flush mb-3">
                                <li v-for="item in cartStore.items" :key="item.id"
                                    class="list-group-item d-flex justify-content-between align-items-center">
                                    <div class="d-flex align-items-center">
                                        <img :src="item.imageUrl" alt="Product"
                                            style="width: 50px; height: 50px; object-fit: cover;" class="me-3 rounded">
                                        <div>
                                            <h6 class="my-0">{{ item.title }}</h6>
                                            <small class="text-muted">{{ item.price }} € x </small>
                                            <input type="number" min="1" :value="item.quantity"
                                                @change="updateQuantity(item.id, $event)" style="width: 60px;"
                                                class="form-control form-control-sm d-inline-block">
                                        </div>
                                    </div>
                                    <div>
                                        <span class="fw-bold d-block text-end">{{ (item.price *
                                            item.quantity).toFixed(2) }} €</span>
                                        <button class="btn btn-sm btn-link text-danger text-decoration-none"
                                            @click="removeItem(item.id)">Entfernen</button>
                                    </div>
                                </li>
                            </ul>
                            <div class="d-flex justify-content-between align-items-center border-top pt-3">
                                <h5>Gesamt</h5>
                                <h4 class="fw-bold text-accent">{{ cartStore.cartTotal }} €</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Address Form -->
            <div class="col-md-6">
                <div class="card shadow-sm">
                    <div class="card-header bg-white">
                        <h4 class="mb-0">Lieferadresse</h4>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="submitOrder">
                            <div class="mb-3">
                                <label for="street" class="form-label">Straße und Hausnummer</label>
                                <input type="text" class="form-control" id="street" v-model="form.street" required>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-4">
                                    <label for="zipCode" class="form-label">PLZ</label>
                                    <input type="text" class="form-control" id="zipCode" v-model="form.zipCode"
                                        required>
                                </div>
                                <div class="col-md-8">
                                    <label for="city" class="form-label">Stadt</label>
                                    <input type="text" class="form-control" id="city" v-model="form.city" required>
                                </div>
                            </div>
                            <div class="mb-4">
                                <label for="country" class="form-label">Land</label>
                                <input type="text" class="form-control" id="country" v-model="form.country" required>
                            </div>

                            <div class="d-grid">
                                <Button type="submit" variant="accent"
                                    :disabled="cartStore.items.length === 0">Kostenpflichtig bestellen</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
</template>

<style scoped>
/* Scoped styles if needed */
</style>
