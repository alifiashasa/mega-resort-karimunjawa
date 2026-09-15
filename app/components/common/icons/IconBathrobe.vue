<script setup lang="ts">
interface Props {
  className?: string
}

withDefaults(defineProps<Props>(), {
  className: 'w-6 h-6',
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
    <path d="M6 3h12l4 6-4 4-2-2v10H8V11L6 13 2 9l4-6Z" />
    <path d="M12 3v18" />
    <path d="M8 15h8" />
  </svg>
</template>
