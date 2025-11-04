<script setup>
import { ref, defineProps } from 'vue';
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
    <!-- <div id="specialbanner" class="text-center py-3" v-if="showBanner">
        Nur heute 10% Rabatt mit dem Code "HAPPY10"&nbsp;&nbsp;
        <button type="button" class="btn btn-dark" @click="closeBanner">Verstanden!</button>
    </div> -->
    <div id="specialbanner" class="text-center py-3" v-if="showBanner">
        {{ text }}&nbsp;&nbsp;
        <button type="button" class="btn btn-dark" @click="closeBanner">OK!</button>
    </div>
</template>

<style scoped>
#specialbanner {
    background-color: #ff6600;
    color: white;
}
</style>