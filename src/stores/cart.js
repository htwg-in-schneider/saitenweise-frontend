import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useCartStore = defineStore('cart', () => {
    // Load initial state from localStorage if available
    const storedItems = localStorage.getItem('cartItems')
    const items = ref(storedItems ? JSON.parse(storedItems) : [])

    // Watch for changes store them to localStorage
    watch(items, (newItems) => {
        localStorage.setItem('cartItems', JSON.stringify(newItems))
    }, { deep: true })

    const cartTotal = computed(() => {
        return items.value.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
    })

    const itemCount = computed(() => {
        return items.value.reduce((count, item) => count + item.quantity, 0)
    })

    function addToCart(product) {
        const existingItem = items.value.find(item => item.id === product.id)
        if (existingItem) {
            existingItem.quantity++
        } else {
            items.value.push({
                id: product.id,
                title: product.title,
                price: product.price,
                imageUrl: product.imageUrl,
                quantity: 1
            })
        }
    }

    function removeFromCart(productId) {
        const index = items.value.findIndex(item => item.id === productId)
        if (index > -1) {
            items.value.splice(index, 1)
        }
    }

    function updateQuantity(productId, quantity) {
        const item = items.value.find(item => item.id === productId)
        if (item) {
            item.quantity = quantity
            if (item.quantity <= 0) {
                removeFromCart(productId)
            }
        }
    }

    function clearCart() {
        items.value = []
    }

    return {
        items,
        cartTotal,
        itemCount,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart
    }
})
