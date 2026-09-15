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
    <!-- Cup body -->
    <path d="M4 9h12v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V9Z" />
    <!-- Handle -->
    <path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16" />
    <!-- Saucer -->
    <path d="M3 21h15" />
    <!-- Steam -->
    <path d="M7 4v2" />
    <path d="M11 3v3" />
  </svg>
</template>

