<template>
  <button :type="type" :class="buttonClass" @click="onClick">
    <slot />
  </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  type: { type: String, default: 'button' },
  variant: { type: String, default: 'accent' },
  onClick: { type: Function, default: null }
});

const buttonClass = `btn btn-${props.variant}`;
</script>
