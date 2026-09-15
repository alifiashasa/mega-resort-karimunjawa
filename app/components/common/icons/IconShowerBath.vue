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
    <!-- Shower Head / Bath -->
    <path d="M4 4h7a4 4 0 0 1 4 4v1" />
    <path d="M12 9h6l1 3H11l1-3Z" />
    <path d="M13 16v.01" />
    <path d="M16 16v.01" />
    <path d="M12 19v.01" />
    <path d="M15 19v.01" />
    <path d="M18 19v.01" />
    <path d="M3 21h18" />
  </svg>
</template>
