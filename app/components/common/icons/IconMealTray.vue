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
    <!-- Tray cloche cover -->
    <path d="M4 16h16" />
    <path d="M4 16c0-4.418 3.582-8 8-8s8 3.582 8 8" />
    <path d="M12 4v4" />
    <circle cx="12" cy="4" r="1.5" />
    <path d="M2 19h20" />
  </svg>
</template>
