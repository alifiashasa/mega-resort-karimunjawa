<script setup lang="ts">
interface Props {
  className?: string
}

withDefaults(defineProps<Props>(), {
  className: 'w-4 h-4',
})
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="className"
  >
    <!-- Broom / cleaning whisk icon -->
    <path d="m14 10 5.5-5.5a1.5 1.5 0 0 0-2.1-2.1L12 8" />
    <path d="m11.5 9.5-2 2a3.5 3.5 0 0 0 4.9 4.9l2-2" />
    <path d="m13.5 11.5-2.5 2.5" />
    <path d="m7.5 16.5-3 3" />
    <path d="m9.5 18.5-3 3" />
  </svg>
</template>

