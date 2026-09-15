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
    <path d="M8 22h8" />
    <path d="M12 15v7" />
    <path d="M5 3h14l-2 9a5 5 0 0 1-5 4 5 5 0 0 1-5-4L5 3Z" />
    <path d="M5 7h14" />
    <path d="M18 3l3-2" />
  </svg>
</template>
