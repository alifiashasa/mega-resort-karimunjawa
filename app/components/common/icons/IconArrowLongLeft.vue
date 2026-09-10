<script setup lang="ts">
interface Props {
  className?: string
}

withDefaults(defineProps<Props>(), {
  className: 'w-5 h-3.5 text-white',
})
</script>

<template>
  <svg
    viewBox="0 0 24 12"
    fill="none"
    stroke="currentColor"
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="className"
  >
    <path d="M23 6H1M1 6L6 1M1 6L6 11" />
  </svg>
</template>
