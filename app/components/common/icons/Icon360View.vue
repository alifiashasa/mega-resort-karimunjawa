<script setup lang="ts">
interface Props {
  className?: string
}

withDefaults(defineProps<Props>(), {
  className: 'w-5 h-5',
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
    <!-- 360 Arrow Loop -->
    <ellipse cx="12" cy="12" rx="10" ry="5" />
    <path d="M16 17l4-5-4-5" />
    <!-- Play triangle / 360 center dot -->
    <polygon points="10 9.5 15 12 10 14.5 10 9.5" fill="currentColor" />
  </svg>
</template>
