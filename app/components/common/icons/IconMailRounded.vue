<script setup lang="ts">
interface Props {
  className?: string
}

withDefaults(defineProps<Props>(), {
  className: 'w-4 h-4 text-[#977E5B] shrink-0',
})
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="className"
  >
    <rect width="18" height="15" x="3" y="4.5" rx="4" />
    <path d="M7.5 8.5L12 12L16.5 8.5" />
  </svg>
</template>
