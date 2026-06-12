<script setup>
import { watch } from 'vue';

const props = defineProps({
  message: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'info' // success | danger | warning | info
  },
  autoDismissMs: {
    type: Number,
    default: 0 // 0 = no auto-dismiss
  }
});

const emit = defineEmits(['dismiss']);

let timer = null;

watch(() => props.message, (val) => {
  if (timer) clearTimeout(timer);
  if (val && props.autoDismissMs > 0) {
    timer = setTimeout(() => emit('dismiss'), props.autoDismissMs);
  }
});
</script>

<template>
  <Transition name="alert-fade">
    <div
      v-if="message"
      :class="`alert alert-${type} alert-dismissible mb-3`"
      role="alert"
    >
      <span>{{ message }}</span>
      <button type="button" class="btn-close" aria-label="Schließen" @click="$emit('dismiss')" />
    </div>
  </Transition>
</template>

<style scoped>
.alert-fade-enter-active,
.alert-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.alert-fade-enter-from,
.alert-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
