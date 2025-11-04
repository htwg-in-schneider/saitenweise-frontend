<script setup>
import { ref, defineProps } from 'vue';
import Button from './Button.vue';
defineProps({
    text: {
        type: String,
        default: 'Viele Sonderangebote heute!',
    }
});
const showBanner = ref(true);
function closeBanner() {
    showBanner.value = false;
}
</script>

<template>
    <div id="specialbanner" class="text-center py-3" v-if="showBanner">
        {{ text }}&nbsp;&nbsp;
        <Button variant="dark" @click="closeBanner">OK!</Button>
    </div>
</template>

<style scoped>
#specialbanner {
    background-color: #ff6600;
    color: white;
}
</style>