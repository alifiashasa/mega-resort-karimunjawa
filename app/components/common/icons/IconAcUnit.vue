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
    <rect x="2" y="4" width="20" height="9" rx="2" />
    <path d="M6 10h12" />
    <path d="M6 17c1.5 2 2.5 2 4 0s2.5-2 4 0 2.5 2 4 0" />
    <path d="M18 7h.01" />
  </svg>
</template>
